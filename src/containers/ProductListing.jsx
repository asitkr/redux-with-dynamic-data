import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    const products = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log(products.allProducts.products);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err);
        })

        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    // console.log("Products: ", products);

    return (
        <div className='ui grid container' style={{marginTop: "20px"}}>
            <ProductComponent  />
        </div>
    )
}

export default ProductListing;