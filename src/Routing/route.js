import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'

const Router = () => {
    return (
     
            <BrowserRouter >
                <Navbar/>
                <Routes>
                    <Route exact path={'/'} element={<Home />}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter >
      
    )
}

export default Router