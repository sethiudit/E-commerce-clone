import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {
  const navigate=useNavigate();//use to programetically change the url
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    // Firebase sign in logic

    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth=>{
      navigate('/')

    })
    .catch(error=>alert(error.massage))
  }

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth); // Successfully created an account
        if(auth){
          navigate('/')
          
        }
      })
      .catch((error) => alert(error.message)); // Handle error
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="imagee"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By enrolling your mobile phone number, you consent to receive automated
          security notifications via text message from Amazon. Message and data
          rates may apply.
        </p>
        <button className="registerbtn" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
