// Initialize Firebase, get it all hooked up
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDFmgVkENuMdtW4ItS9Lw4MiM3ivRl1f0w",
  authDomain: "react-expense.firebaseapp.com",
  databaseURL: "https://react-expense.firebaseio.com",
  storageBucket: "react-expense.appspot.com",
  messagingSenderId: "468841382775"
};

var Fb = firebase.initializeApp(config, 'expense');
module.exports.Fb = Fb.database();