import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="homeCon">
                <div className="container p-5 bg-light mt-5 rounded">
                    <h1 className='fw-light fs-1'>Welcome to React Store!</h1>
                    <p className='fw-light fs-5'>This is a simple React application built with Vite, Bootstrap, and Fake Store API.</p>
                    <hr />
                    <p>Browse our collection of products and learn more about React development.</p>
                    <Link className='btn btn-primary fs-5 p-2' to={'/products'}>View Products</Link>
                </div>
            </div>
        </>
    );
}
