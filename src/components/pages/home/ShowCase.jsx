import React, { useEffect, useState } from 'react';
import GoToBtn from '../../common/GoToBtn';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig';
import GridItems from '../../common/GridItems';

const ShowCase = () => {
  const [products, setProducts] = useState([]);
  const productsId = [
    'loBA31RkNrmcxIHMgRLK',
    'GmaUZ6nC0D4AeDdSn5gd',
    'yWcPTO63tz1ZyeY2FGNc',
    's6FL8J2lfUoblQ9qlMK7',
    'WpFLke68eYSf3FIIkU4I',
    'JoMjdHzaCbbjTsnKXqzI',
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
    <section className="showcase">
      <div className="container">
        <div className="head">
          <h6>new arrivals</h6>
          <h2>Boost your productivity</h2>
          <span className="head-bare"></span>
        </div>
        <GridItems products={products} size="lg" />
        <div className="footer">
          <GoToBtn str="View all products" style="btn-filled" />
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
