import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Electricians from '../components/Electricians/Electricians'
import ContactUs from '../components/ContactUs/ContactUs'
import ScrollToTop from '../components/ScrollToTop'
import Becomeabuddy from '../components/Becomeabuddy/Becomeabuddy'

const Router = () => {
    return (
     
            <BrowserRouter >
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route exact path={'/'} element={<Home />}></Route>
                    <Route exact path={'/Login'} element={<Login />}></Route>
                    <Route exact path={'/Register'} element={<Register />}></Route>
                    <Route exact path={'/Electricians'} element={<Electricians />}></Route>
                    <Route exact path={'/ContactUs'} element={<ContactUs />}></Route>
                    <Route exact path={'/Becomeabuddy'} element={<Becomeabuddy />}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter >
      
    )
}

export default Router