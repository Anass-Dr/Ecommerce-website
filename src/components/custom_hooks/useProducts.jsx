import { useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';

export const useProducts = (params) => {
  const { keyword, fieldName = 'title', fieldType = 'str', f } = params;
  const queryOperator =
    fieldType === 'str'
      ? where(`${fieldName}`, '==', keyword)
      : where(`${fieldName}`, 'array-contains', keyword[0]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, 'store'), queryOperator);
      const querySnapshot = await getDocs(q);
      f(querySnapshot);
    };
    getProduct();

    window.scrollTo(0, 0);
  }, [keyword]);
};

export default useProducts;
