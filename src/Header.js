import React from 'react'
import "./Header.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>

            <Link to="/">
                <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' ></img>
            </Link>

            <div className='header_search'>
                <input className="header_searchinput" type='text'></input>
                <SearchIcon className='header_search_icon'></SearchIcon>
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div className='header_opt' onClick={handleAuthentication}>
                        <span className='opt_L1'>Hello {user?.email || 'guest'}</span>
                        <span className='opt_L2'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className='header_opt'>
                        <span className='opt_L1'>Returns</span>
                        <span className='opt_L2'>& Orders</span>
                    </div></Link>

                <div className='header_opt'>
                    <span className='opt_L1'>Your</span>
                    <span className='opt_L2'>Prime</span>
                </div>
            </div><Link to="/checkout"> <div className='basket'><ShoppingBasketIcon></ShoppingBasketIcon>
                <span className='opt_Lc'> {basket?.length} </span>
            </div></Link>

        </div>


    )
}

export default Header