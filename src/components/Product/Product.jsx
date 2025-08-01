import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Product({Increse}) {
    const { id } = useParams();
    let [product, setProduct] = useState(null);

    async function getDataPro() {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data);
        } catch {
            console.log("Error");
        }
    }

    useEffect(() => {
        getDataPro();
    }, [id]);

    if (!product) {
        return <Loader />;
    }

    return (
        <div className="homeCon">
            <div className="container mt-5">
                <div className="row g-3 mt-5">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="text-center">
                        <img src={product.image} alt="Product" className="img-fluid imgProduct"  />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="mb-3">{product.title}</h2>
                        <p className="fs-5 text-primary">${product.price}</p>
                        <p className="badge bg-secondary mb-3">{product.category}</p>
                        <p className="mb-3">{product.description}</p>
                        <div className="d-flex flex-column gap-3">
                            <button className="btn btn-success" onClick={ () => Increse(1)}>Add to Cart</button>
                            <Link to="/products" className="btn btn-outline-secondary">Back to Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}