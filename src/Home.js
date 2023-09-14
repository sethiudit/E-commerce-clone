import React from 'react'
import Product from "./Product.js"
import "./Home.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    return (
        <div className='Home'>

            <img src='https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg' className='Ad'></img>
         
                <div className='home_row'>
                    <Product tittle='Ipad 9th gen' price='354.00' rating='4/5' image='https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg' id='1' ></Product>
                    <Product tittle='Mighty Patch Original ' price='11.9' rating='4.5/5' image='https://m.media-amazon.com/images/I/41JILztxbDL._AC_UL480_QL65_.jpg' id='2' ></Product>



                </div>
              
                    <div className='home_row'>
                    <Product tittle='Ipad 9th gen' price='354.00' rating='4/5' image='https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg' id='3' ></Product>
                    <Product tittle='Mighty Patch Original ' price='11.90' rating='4.5/5' image='https://m.media-amazon.com/images/I/41JILztxbDL._AC_UL480_QL65_.jpg' id='4'></Product>
                    <Product tittle='Ipad 9th gen' price='354.00' rating='4/5' image='https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg' ></Product>

                    </div>
                   
            
            </div>
       
    )
}

export default Home