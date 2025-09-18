import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  return (
    <Layout>
      <section>
        <div>
          <h2>HELLO</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket.map((item, index) => {
              return (
                <ProductCard key={index} product={item} renderDesc={true} flex={true}/>
              );
            })
          )}
        </div>
        <div></div>
      </section>
    </Layout>
  );
}

export default Cart;
//   {
//                         basket?.length==0?(<p>Opps! No item in your cart</p>:(
//                             basket?.map((item)=>{
//                return <ProductCard/>

//                             }
//                         ))
//                      )
//                     }
