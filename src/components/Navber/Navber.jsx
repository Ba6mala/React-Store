import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navber({number}) {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container container-fluid">
                    <Link className="navbar-brand" to={'/'}>React Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/products'}>Products</Link>
                        </li>
                        <li className="nav-item position-relative">
                            <i className="fa-solid fa-cart-shopping text-light"></i>
                            <span className='text-light text-center count position-absolute'>{number}</span>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}
