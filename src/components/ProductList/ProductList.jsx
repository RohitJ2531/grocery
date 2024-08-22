import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProduct } from "../../service/service";
import { useDispatch, useSelector } from "react-redux";
import { fetchedProducts } from "../AddProduct/ProductAction";

export const ProductList = ({ role }) => {
  const dispatch = useDispatch();
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    getProduct()
      .then((res) => dispatch(fetchedProducts(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const products = useSelector((state) => state.productStore.products);

  // Filter products based on the selected category
  const filteredProducts =
    categoryFilter === "all"
      ? products
      : products.filter((product) => product.category === categoryFilter);

       
  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(to right top, #f0f3f7, #b9e8fc, #69e0eb, #00d5ba, #2cc46f)`,
      }}
    >
      {/* Category Filter */}
      <div className="flex justify-center pt-6  ">
        <select
          className="border border-gray-300 rounded-md px-48 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
      {/* Product List */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard data={product} role={role} />
          </div>
        ))}
      </div>
    </div>
  );
};
