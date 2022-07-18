import React, { Fragment,useEffect } from 'react'
import MetaData from './layouts/MetaData'
import { Link } from 'react-router-dom'
import Product from './product/Product'
//backend
import {useDispatch,useSelector } from 'react-redux'
// import { useAlert } from 'react-alert';
import {getProducts} from '../actions/productActions'

const Home = () => {
  const dispatch=useDispatch();

    const { loading, products, error, productsCount } = useSelector(state => state.products)

  useEffect(()=>{
     dispatch(getProducts());
  },[dispatch])

  return (
    <Fragment>
     
     <MetaData title={'Buy Best Products Online'}/>

    <div classNameName="container container-fluid">
      <h1 id="products_heading">Latest Products</h1>
      
      <section id="products" className="container mt-5">
      <div className="row">
           {/* Code dynamic */}
          {products && products.map(product => (
             <Product key={product._id} product={product}/>
       

 ))}
       
       
    </div>
   </section>
        
</div>
</Fragment>
  )
}

export default Home