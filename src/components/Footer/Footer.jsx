import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
           <footer className="py-3 my-4 bg-dark mb-0 mt-5">
                <ul className="nav justify-content-center pb-3"> 
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-body-secondary fs-5">Home</Link></li>
                    <li className="nav-item"><Link to={'/products'} className="nav-link px-2 text-body-secondary fs-5">Products</Link></li>
                </ul> 
                <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
                    <li className="nav-item"><a href='bm1435@fayuom.edu.eg' className="nav-link px-2 text-body-secondary"><i className="fa-solid fa-envelope fs-4"></i></a></li>
                    <li className="nav-item"><a href='https://www.facebook.com/share/1Aoa8rrdGe/' className="nav-link px-2 text-body-secondary"><i className="fa-brands fa-square-facebook fs-4"></i></a></li>
                    <li className="nav-item"><a href='https://www.linkedin.com/in/basmala-mohamed-171254302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="nav-link px-2 text-body-secondary"><i className="fa-brands fa-linkedin fs-4"></i></a></li>
                </ul> 
                <p className="text-center text-body-secondary">© 2025 All rights reserved to Basmala</p>
           </footer> 
        </>
    );
}
