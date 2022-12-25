import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBN6ww3lF_NK31-8CWj0tbCe24Vv2AYMEY',
  authDomain: 'ecommerce-395d8.firebaseapp.com',
  projectId: 'ecommerce-395d8',
  storageBucket: 'ecommerce-395d8.appspot.com',
  messagingSenderId: '359761397790',
  appId: '1:359761397790:web:e5f82add69365d479f860f',
  measurementId: 'G-0TDJVD865K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// get Data :
const getProducts = async () => {
  const colRef = await getDocs(collection(db, 'store'));
  colRef.forEach((doc) => {
    console.log(doc.data());
  });
};
