import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { getProducts } from '../Redux/AppReducer/action';
import ProductCard from './ProductCard';
const Productlist = () => {

    const dispatch=useDispatch();
  const Products = useSelector((state)=>state.AppReducer.Products);
  useEffect(()=>{
      if(Products.length===0){
           dispatch(getProducts())
      }
  },[dispatch,Products.length]);
  return (
    <div>
         {Products.length>0 && Products.map((data)=>(<div key={data.id}>
            <Link to={`/product/${data.id}`}>
            <ProductCard data={data}/>
            </Link>
        </div>))}
    </div>
  )
}

export default Productlist