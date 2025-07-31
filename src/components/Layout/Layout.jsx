import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';

export default function Layout() {
    return (
        <>
          <Navber />
          <Outlet />  
          <Footer />
        </>
    );
}
