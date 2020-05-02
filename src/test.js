import firebase from 'firebase/app';
import 'firebase/firebase';

const firestore=firebase.firestore();

firestore.collection('users').doc('6LZEIFg1BzXsu6i36p1M').collection('cartItems').doc('Cmpr1a7dE2g2zmdlPc24');

const x = firestore.doc('users/6LZEIFg1BzXsu6i36p1M/cartItems/Cmpr1a7dE2g2zmdlPc24');

export default x ;