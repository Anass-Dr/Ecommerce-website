import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig';
import GridItems from '../../common/GridItems';

const Releases = function () {
  const [products, setProducts] = useState([]);
  const productsId = [
    'loBA31RkNrmcxIHMgRLK',
    'GmaUZ6nC0D4AeDdSn5gd',
    'yWcPTO63tz1ZyeY2FGNc',
    's6FL8J2lfUoblQ9qlMK7',
  ];

  const getProduct = async (id) => {
    const docRef = doc(db, 'store', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { title, description, price, image, category } = docSnap.data();
      setProducts((prev) => [
        ...prev,
        {
          title,
          description,
          price,
          image,
          category,
        },
      ]);
    } else {
      console.log('No such document!');
    }
  };

  useEffect(() => {
    productsId.map((id) => getProduct(id));
  }, []);

  return (
    <section id="setup-releases" className="setup--section">
      <div className="container">
        <div id="head">
          <h3>New releases</h3>
          <a className="setups__a" href="#">
            <span>View All</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
            </svg>
          </a>
        </div>
        {products.length !== 0 && (
          <GridItems products={products} size="sm" theme="grid" />
        )}
      </div>
    </section>
  );
};

export default Releases;
