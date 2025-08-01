import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Products() {
    let [recipesArray,setRecipesArray] = useState([]);
    async function getData() {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products');
            setRecipesArray(data);
            console.log(data);
        }catch {
            console.log("Error");
        }
    }

    useEffect( ()=> {
        getData();
    }, [])

    return (
        <>
            <div className="container mt-4">
                <h2>Products</h2>
                <div className="box-card row d-flex justify-content-center align-items-center">
                    { recipesArray.length > 0 ? recipesArray.map((recipe)=> <Elements recipe={recipe} key={recipe.id} />) : <Loader />}
                </div>
            </div>
        </>
    );
}

function Elements({recipe}) {
    return(
        <>
            <div className="col-md-3 col-sm-6 rounded border border-1 hCard">
                <div className="item mt-1 h-100">
                    <div className="image d-flex justify-content-center align-items-center p-2">
                        <img src={recipe.image} alt="image-product" className='image w-50' />
                    </div>
                    <div className="text d-flex flex-column gap-2 p-1">
                        <h5 className='overflow-hidden mt-2'>{recipe.title}</h5>
                        <p className='fw-light'>${recipe.price}</p>
                        <Link className='btn btn-primary' to={`/product/${recipe.id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
