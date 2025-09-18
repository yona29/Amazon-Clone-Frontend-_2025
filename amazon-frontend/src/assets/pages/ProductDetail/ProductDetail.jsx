import React, { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css'
import Layout from '../../Components/Layout/Layout';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
const ProductDetail = () => {
    const {productId} = useParams ()
 const [product, setproduct] = useState([]);
 const [isLoading, setisLoading] = useState(false)
    useEffect(()=>{
        setisLoading(true)
axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
    setisLoading(false)
    
    
    }).catch((err)=>{console.log(err);
        setisLoading(false)
    })



    },[])









    return (
      <Layout>
        {isLoading ? <Loader /> : <ProductCard product={product} 
        flex={true} 
        renderDesc={true}/>}
      </Layout>
    );
}

export default ProductDetail;
