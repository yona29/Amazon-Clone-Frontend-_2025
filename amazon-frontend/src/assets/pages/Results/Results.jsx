import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const { categoryName } = useParams();
  useEffect(() => {
    console.log(categoryName);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setResults(false)
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Results;
