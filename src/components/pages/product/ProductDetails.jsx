import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import ProductPrevBody from '../../common/ProductPrevBody';
import SimpleBtn from '../../common/SimpleBtn';
import Loading from '../../common/Loading';
import useProducts from '../../custom_hooks/useProducts';
import GridItems from '../../common/GridItems';
import CustomSetup from '../../common/CustomSetup';
import Footer from '../../common/Footer';
import './ProductDetails.css';

const ProductInfoHead = ({ tab, onClick }) => {
  return (
    <ul className="product-info--head">
      <li
        className={`product-info__title ${
          tab === 'desc' ? 'active-title' : ''
        }`}
        onClick={() => onClick('desc')}
      >
        Description
      </li>
      <li
        className={`product-info__title ${
          tab === 'desc' ? '' : 'active-title'
        }`}
        onClick={() => onClick('review')}
      >
        Reviews (0)
      </li>
    </ul>
  );
};

const ProductDesc = () => {
  return (
    <p className="product-info--desc">
      Auctor eros suspendisse tellus venenatis sodales purus non pellentesque
      amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat
      consectetur egestas magna pharetra cursus risus, lectus enim eget eu et
      lobortis faucibus.
      <br />
      <br />
      Eget odio justo ut scelerisque purus non aliquam adipiscing amet
      condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem
      at eget ac hendrerit odio enim felis sit augue lorem egestas dictum
      vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at
      leo faucibus cursus metus.
      <br />
      <br />
      Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed
      eu augue id ac tempus aliquam facilisis vivamus eget nisi id.
    </p>
  );
};

const StarIcon = (props) => {
  const {
    id,
    isActive,
    isHover,
    handleClick,
    handleMouseOver,
    handleMouseOut,
  } = props;
  return (
    <i
      onClick={() => handleClick(id)}
      onMouseOver={() => handleMouseOver(id)}
      onMouseOut={() => handleMouseOut(id)}
      className={`fa-${isActive || isHover ? 'solid' : 'regular'} fa-star`}
    ></i>
  );
};

const ProductReview = ({ reviews }) => {
  const [state, setState] = useState([
    { active: false, hover: false },
    { active: false, hover: false },
    { active: false, hover: false },
    { active: false, hover: false },
    { active: false, hover: false },
  ]);

  const handleMouseOver = (id) => {
    const newObj = state.map((obj, idx) => {
      if (idx <= id && !obj.active) return { active: false, hover: true };
      else return obj;
    });
    setState(newObj);
  };

  const handleMouseOut = (id) => {
    const newObj = state.map((obj, idx) => {
      if (idx <= id && !obj.active) return { active: false, hover: false };
      else return obj;
    });
    setState(newObj);
  };

  const handleClick = (id) => {
    const newObj = state
      .map((item) => ({ active: false, hover: false }))
      .map((obj, idx) => {
        if (idx <= id) return { ...obj, active: true };
        else return obj;
      });
    setState(newObj);
  };

  return (
    <>
      {reviews === 0 && (
        <p className="product-info__alert">There are no reviews yet.</p>
      )}
      <div className="product-info--review">
        <h4>Be the first to review “EcoAir plant on brass”</h4>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form>
          <div className="product-info--review__rate">
            <label>Your rating *</label>
            <span>
              {state.map((obj, idx) => (
                <StarIcon
                  key={idx}
                  handleClick={handleClick}
                  handleMouseOver={handleMouseOver}
                  handleMouseOut={handleMouseOut}
                  id={idx}
                  isActive={obj.active}
                  isHover={obj.hover}
                />
              ))}
            </span>
          </div>
          <label className="review-label" htmlFor="review">
            Your review *
          </label>
          <textarea name="review" id="review" cols="45" rows="6"></textarea>
          <div className="form-control">
            <div>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" />
            </div>
          </div>
          <SimpleBtn str="Submit" form={true} />
        </form>
      </div>
    </>
  );
};

const RelatedProducts = ({ category, title }) => {
  const [products, setProducts] = useState([]);

  const random = (orgArr, newArr) => {
    const obj = orgArr[Math.floor(Math.random() * orgArr.length)];
    if (newArr.includes(obj)) return random(orgArr, newArr);
    else newArr.push(obj);
  };
  const getProducts = (docs) => {
    let data = [];
    docs.forEach((doc) => {
      data.push(doc.data());
    });
    data = data.filter((item) => item.title !== title);
    const res = [];
    const max = data.length <= 3 ? data.length : 3;
    for (let i = 0; i < max; i++) {
      random(data, res);
    }
    setProducts(res);
  };
  useProducts({
    keyword: category,
    fieldName: 'category',
    fieldType: 'array',
    f: getProducts,
  });

  return (
    <section className="related-products">
      <h4>Related products</h4>
      {products.length !== 0 && <GridItems products={products} size="sm" />}
    </section>
  );
};

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState('desc');
  const [reviews, setReviews] = useState(0);
  const { title } = useParams();

  // Request Data from Db :
  const getProduct = (docs) => {
    const data = [];
    docs.forEach((doc) => data.push(doc.data()));
    setProduct(data[0]);
  };
  useProducts({
    keyword: title,
    fieldName: 'title',
    fieldType: 'str',
    f: getProduct,
  });

  const handleTabClick = (id) => {
    setTab(id);
  };

  return (
    <div className="product-details">
      <Navigation theme="dark" />
      {Object.keys(product).length !== 0 ? (
        <>
          <div className="container">
            <ProductPrevBody product={product} size="lg" />
            <section className="product-info">
              <ProductInfoHead tab={tab} onClick={handleTabClick} />
              {tab === 'desc' ? (
                <ProductDesc />
              ) : (
                <ProductReview reviews={reviews} />
              )}
            </section>
            <RelatedProducts
              category={product.category}
              title={product.title}
            />
          </div>
          <CustomSetup />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductDetails;
