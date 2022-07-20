import { Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { getProducts } from '../Redux/AppReducer/action';
import ProductCard from './ProductCard';
import "./Productcard.css"
const Productlist = () => {

    const dispatch=useDispatch();
    const [page,setpage]=useState(1);
    const [Data,setData]=useState([]);
    const [Total,setTotal]=useState([]);
    

  const Products = useSelector((state)=>state.AppReducer.Products);
  useEffect(()=>{
      if(Products.length===0){
           dispatch(getProducts())
      }
  },[dispatch,Products.length]);

  useEffect(()=>{
    const getData=async()=>{
      let r= await axios.get(` http://localhost:8080/cars?_page=${page}&_limit=4`);
         setData(r.data);
          setTotal(Number(r.headers["x-total-count"]))
      }
   getData()
 },[page]);
  return (
    <div>
      <div className='car'>
        {Data.map((data)=>(
          <ProductCard data={data}/>
        ))}
        <button onClick={()=>setpage(page-1)}>{"<"}</button>
        <button onClick={()=>setpage(page+1)}>{">"}</button>
      </div>
    <Grid templateColumns='repeat(4, 1fr)' gap={6} >
         {Products.length>0 && Products.map((data)=>(<div key={data.id}>
            <Link to={`/product/${data.id}`}>
             <GridItem  height="100%">
                <ProductCard data={data}/>
              </GridItem> 
            </Link>
        </div>))}
    </Grid>
    </div>
  )
}

export default Productlist