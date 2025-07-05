import React from "react";
import "./Category.css";
import { categories } from "../../static/static";

const Category = () => {

  return (
    <section className="category" id="categories">
      <div className="container">
        <div className="category_wrapper">
          {categories?.map((item, index) => (
            <p className="c_link" key={index}>
              <a href="#">{item}</a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
