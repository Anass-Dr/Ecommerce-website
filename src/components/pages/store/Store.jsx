import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import GridItems from '../../common/GridItems';
import Overlay from '../../common/Overlay';
import CustomSetup from '../../common/CustomSetup';
import Footer from '../../common/Footer';
import NotFound from '../../common/NotFound';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig';
import activeGridIcon from '../../../assets/icons/grid-active.png';
import gridIcon from '../../../assets/icons/grid.png';
import './Store.css';

const Head = () => {
  return (
    <div id="head">
      <p className="head--p">
        <Link to="/">Home</Link>
        <span> / Store</span>
      </p>
      <h4 className="head--h4">Shop</h4>
    </div>
  );
};

const Toolbar = (props) => {
  const {
    handleFilterSide,
    selectValue,
    handleSelectValue,
    handleDisplayStyle,
  } = props;
  const [isGridActive, setIsGridActive] = useState(true);

  return (
    <ul className="toolbar">
      <li onClick={handleFilterSide}>
        <i className="fa-solid fa-bars"></i>
        <span id="filter">Filter</span>
      </li>
      <select value={selectValue} onChange={handleSelectValue}>
        <option value="default">Default sorting</option>
        <option value="popular">Sort by popularity</option>
        <option value="rate">Sort by average rating</option>
        <option value="latest">Sort by latest</option>
        <option value="low to high">Sort by price: low to high</option>
        <option value="high to low">Sort by price: high to low</option>
      </select>
      <li onClick={() => handleDisplayStyle('grid')} className="display-style">
        <img
          onClick={() => setIsGridActive(true)}
          src={isGridActive ? activeGridIcon : gridIcon}
          alt="grid-icon"
        />
      </li>
      <li onClick={() => handleDisplayStyle('list')} className="display-style">
        <i
          onClick={() => setIsGridActive(false)}
          className={`fa-solid fa-list ${!isGridActive ? 'active--i' : ''}`}
        ></i>
      </li>
    </ul>
  );
};

const Products = ({ products, group, selectValue, theme }) => {
  const [groupProducts, setGroupProducts] = useState(products);

  useEffect(() => {
    const max = 12;
    const i = (group - 1) * max;
    const newProducts = products.filter(
      (item, idx) => idx >= i && idx <= max - 1 + i
    );

    switch (selectValue) {
      case 'default':
        setGroupProducts(newProducts);
        break;
      case 'popular':
      case 'rate':
      case 'latest':
        setGroupProducts(newProducts.reverse());
        break;
      case 'low to high':
        setGroupProducts(
          newProducts.sort((a, b) => (a.price > b.price ? 1 : -1))
        );
        break;
      case 'high to low':
        setGroupProducts(
          newProducts.sort((a, b) => (a.price > b.price ? -1 : 1))
        );
      default:
        setGroupProducts(newProducts);
    }
  }, [products, selectValue, group]);

  return <GridItems products={groupProducts} theme={theme} />;
};

/***  PAGINATION :  ***/
const Pagination = ({ groups, currentGroup, handleGroup }) => {
  return (
    <ul className="pagination">
      <li
        className={`leftArrow ${currentGroup === 1 ? 'hidden' : ''}`}
        onClick={() => handleGroup('back')}
      >
        ←
      </li>
      {Array.from(Array(groups).keys()).map((n) => (
        <li
          className={`page-number ${
            currentGroup === n + 1 ? 'pagination--active' : ''
          }`}
          key={n}
          onClick={() => handleGroup(n + 1)}
        >
          {n + 1}
        </li>
      ))}
      <li
        className={`rightArrow ${currentGroup === groups ? 'hidden' : ''}`}
        onClick={() => handleGroup('go')}
      >
        →
      </li>
    </ul>
  );
};

/***  FILTER SIDEBAR :  ***/
const FilterSide = (props) => {
  const {
    priceFilter,
    setPriceFilter,
    products,
    isOpen,
    minPrice,
    maxPrice,
    handleFilterSide,
    handlePriceFilter,
  } = props;
  const trackLength = maxPrice - minPrice;

  const handlePriceSliderMin = (e) => {
    const min =
      e.target.value > priceFilter.max - 10
        ? priceFilter.max - 10
        : e.target.value;
    setPriceFilter((prev) => ({ ...prev, min }));
  };
  const handlePriceSliderMax = (e) => {
    const max =
      e.target.value < +priceFilter.min + 10
        ? +priceFilter.min + 10
        : e.target.value;
    setPriceFilter((prev) => ({ ...prev, max }));
  };

  const handlePriceInputMin = (e) => {
    const value = e.target.value;
    let min;
    if (value < minPrice) min = minPrice;
    if (value > priceFilter.max - 10) min = priceFilter.max - 10;
    if (value >= minPrice && value <= priceFilter.max - 10) min = value;
    setPriceFilter((prev) => ({ ...prev, min }));
  };
  const handlePriceInputMax = (e) => {
    const value = e.target.value;
    let max;
    if (value > maxPrice) max = maxPrice;
    else max = value < +priceFilter.min + 10 ? +priceFilter.min + 10 : value;
    setPriceFilter((prev) => ({ ...prev, max }));
  };

  const handleMouseUp = () => {
    const min = priceFilter.min || minPrice;
    const max = priceFilter.max || maxPrice;
    handlePriceFilter(min, max);
    handleResetBtn();
  };

  const handleResetBtn = () => {
    const obj = { min: minPrice, max: maxPrice };
    if (priceFilter.length === 0) return;

    for (const key of Object.keys(priceFilter)) {
      if (priceFilter[key] != obj[key]) return true;
    }
  };

  const categories = [];
  products.forEach((product) =>
    product.category.forEach((item) => {
      const category = item[0].toUpperCase() + item.slice(1);
      if (categories.some((obj) => obj.category === category)) {
        categories.find((obj) => {
          if (obj.category === category) obj.count += 1;
        });
      } else {
        const obj = {
          category,
          count: 1,
        };
        categories.push(obj);
      }
    })
  );

  const styles = {
    '--low': `${
      (((priceFilter.min ? priceFilter.min : minPrice) - minPrice) /
        trackLength) *
      100
    }%`,
    '--high': `${
      (((priceFilter.max ? priceFilter.max : maxPrice) - minPrice) /
        trackLength) *
      100
    }%`,
  };

  return (
    <div className={`filter-side ${isOpen ? 'filter--open' : 'filter--close'}`}>
      <div onClick={handleFilterSide} className="filter-close">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="filter-search">
        <input type="text" placeholder="Search products..." />
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="filter-price">
        <p>Filter by price</p>
        <div className="range_container">
          <div className="sliders_control">
            <div style={styles} className="sliders_track"></div>
            <input
              type="range"
              id="minSlider"
              value={priceFilter.min || minPrice}
              min={minPrice}
              max={maxPrice}
              onChange={handlePriceSliderMin}
              onMouseUp={handleMouseUp}
            />
            <input
              type="range"
              id="maxSlider"
              value={priceFilter.max || maxPrice}
              min={minPrice}
              max={maxPrice}
              onChange={handlePriceSliderMax}
              onMouseUp={handleMouseUp}
            />
          </div>
          <div className="form_control">
            <div>
              <input
                className="form_control__input"
                type="text"
                value={priceFilter.min || minPrice}
                onChange={handlePriceInputMin}
              />
            </div>
            <div>
              <input
                className="form_control__input"
                type="text"
                value={priceFilter.max || maxPrice}
                onChange={handlePriceInputMax}
              />
            </div>
          </div>
          {handleResetBtn() && (
            <div id="range-reset">
              <button
                onClick={() => {
                  setPriceFilter({});
                  handlePriceFilter(minPrice, maxPrice);
                }}
              >
                Reset
              </button>
            </div>
          )}
        </div>
        <ul className="categories">
          {categories
            .sort((a, b) => (a.category > b.category ? 1 : -1))
            .map((obj, idx) => (
              <li key={idx}>
                <Link to={`/product-category/${obj.category}`}>
                  {obj.category} ({obj.count})
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

/***  ACTIVE FILTERS :  ***/
const ActiveFilters = ({ priceFilter, minPrice, maxPrice, onClose }) => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const base = { min: minPrice, max: maxPrice };
    const obj = {};
    for (const key of Object.keys(priceFilter)) {
      if (priceFilter[key] != base[key]) obj[key] = priceFilter[key];
    }
    setFilters(obj);
  }, [priceFilter]);

  const handleClose = (key) => {
    const obj = { ...filters };
    delete obj[key];
    setFilters(obj);
    onClose(key);
  };

  if (Object.keys(filters).length === 0) return;
  return (
    <div className="active-filters">
      <h3>Active Filters</h3>
      <ul>
        {Object.keys(filters).map((key, idx) => (
          <li onClick={() => handleClose(key)} key={idx}>
            <i className="fa-solid fa-xmark"></i>
            <span>
              {key[0].toUpperCase() + key.slice(1)} $
              {Number(filters[key]).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/*  ----  STORE COMPENENT :  ----  */
function Store() {
  const [products, setProducts] = useState([]);
  const [group, setGroup] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceValue, setPriceValue] = useState({});
  const [priceFilter, setPriceFilter] = useState({});
  const [selectValue, setSelectValue] = useState('');
  const [displayStyle, setDisplayStyle] = useState('grid');

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'store'));
      querySnapshot.forEach((doc) => {
        setProducts((prev) => [...prev, doc.data()]);
      });
    };
    getData();
  }, []);

  const handleGroup = (arg) => {
    if (typeof arg === 'number') setGroup(arg);
    else {
      if (arg === 'go') setGroup((prev) => prev + 1);
      else setGroup((prev) => prev - 1);
    }
    window.scrollTo(0, 0);
  };

  const handleFilterSide = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handlePriceFilter = (min, max) => {
    setPriceValue({ min, max });
    handleFilterSide();
  };

  const handleFilterDelete = (key) => {
    const base = { min: minPrice, max: maxPrice };
    const obj = { ...priceValue };
    obj[key] = base[key];
    setPriceFilter(obj);
    setPriceValue(obj);
  };

  const handleSelectValue = (e) => {
    setSelectValue(e.target.value);
  };

  const handleDisplayStyle = (type) => {
    setDisplayStyle(type);
  };

  const handleAlert = () => {
    setPriceFilter({});
    setPriceValue({ min: minPrice, max: maxPrice });
  };

  const maxPrice = useMemo(
    () =>
      Math.ceil(
        products.reduce(
          (acc, curr) => (acc > curr.price ? acc : curr.price),
          products[0]?.price
        )
      ),
    [products]
  );
  const minPrice = useMemo(
    () =>
      Math.floor(
        products.reduce(
          (acc, curr) => (acc < curr.price ? acc : curr.price),
          products[0]?.price
        )
      ),
    [products]
  );
  const filteredProducts = useMemo(
    () =>
      priceValue.min && priceValue.max
        ? products.filter(
            (product) =>
              product.price <= priceValue.max && product.price >= priceValue.min
          )
        : products.filter(
            (product) => product.price <= maxPrice && product.price >= minPrice
          ),
    [products, priceValue]
  );

  return (
    <div id="store">
      <Navigation theme="dark" />
      {products.length !== 0 && (
        <>
          <div className="container store--container">
            <Head />
            {filteredProducts.length === 0 ? (
              <NotFound f={handleAlert} />
            ) : (
              <Toolbar
                handleFilterSide={handleFilterSide}
                selectValue={selectValue}
                handleSelectValue={handleSelectValue}
                handleDisplayStyle={handleDisplayStyle}
              />
            )}
            {Object.keys(priceValue).length !== 0 &&
              filteredProducts.length !== 0 && (
                <ActiveFilters
                  priceFilter={priceValue}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onClose={handleFilterDelete}
                />
              )}
            <Products
              products={filteredProducts}
              group={group}
              selectValue={selectValue}
              theme={displayStyle}
            />
            {Math.ceil(filteredProducts.length / 12) > 1 && (
              <Pagination
                currentGroup={group}
                groups={Math.ceil(filteredProducts.length / 12)}
                handleGroup={handleGroup}
              />
            )}
          </div>
          <CustomSetup />
          <Footer />
          <FilterSide
            priceFilter={priceValue}
            setPriceFilter={setPriceValue}
            isOpen={isFilterOpen}
            products={products}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleFilterSide={handleFilterSide}
            handlePriceFilter={handlePriceFilter}
          />
        </>
      )}
      {isFilterOpen && (
        <Overlay
          onClick={handleFilterSide}
          backgroundColor="#000"
          opacity=".4"
        />
      )}
    </div>
  );
}

export default Store;
