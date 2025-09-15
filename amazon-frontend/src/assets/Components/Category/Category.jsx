import React from 'react'
import {categoryInfo} from "./CategoryFullInfos"
import CategoryCard from './CategoryCard'
import classes from "./category.module.css";

const Category = () => {
  return (
    <section className={classes.Category__container}>
      {categoryInfo.map((infos) => (
        <CategoryCard key={infos.title} data={infos} />
      ))}
    </section>
  );
}

export default Category
