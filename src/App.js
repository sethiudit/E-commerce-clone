// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Header.css'
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import Payment from './Payment';
import Orders from './Orders';

function App() {
  const [{},dispatch]=useStateValue();
useEffect(()=>{
// will only run once when the app component loads...

auth.onAuthStateChanged(authUser=>{
  console.log("Rhe user is >>>>",authUser);
  if(authUser){
    dispatch({
      type:'SET_USER',
      user:authUser
    })

  }else{
    //the user logged out
dispatch({
  type:'SET_USER',
  user:null
})
  }
})
},[])

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/orders" element={<div><Orders></Orders></div>} />
        <Route path="/login" element={<div><Login></Login></div>} />
          <Route path="/checkout" element={<div><Header /><Checkout/><Footer></Footer></div>} />
          <Route path="/payment" element={<div><Header /><Payment></Payment><Footer></Footer></div>} />
          {/* defult page at bottom */}
          <Route path="/" element={<div><Header /><Home /><Footer></Footer></div>} />



        </Routes>

      </div>
    </Router>

  );
}

export default App;
