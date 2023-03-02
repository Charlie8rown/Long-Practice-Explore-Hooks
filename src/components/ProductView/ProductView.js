import React, { useEffect, useState } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);
  const [selected, selectProduct] = useState(null);

  useEffect(() => {
    if(selected)setSideOpen(true)
  }, [selected])

  useEffect(() => {
    if(!sideOpen)selectProduct(null)
  }, [sideOpen])

  // useEffect(() => {
  //   console.log(`selectProduct CHANGED TO`, selectProduct);
  //   setSideOpen(true);
  // }, [selected])

  // useEffect(() => {
  //   console.log(`sideOpen CHANGED TO`, sideOpen);
  //   selectProduct(null);
  // }, [sideOpen]);


  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() =>selectProduct(item)}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div
            className="product-side-panel-toggle"
            onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selected} />
      </div>
    </div>
  );
}

export default ProductView;
