import React from "react";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="mt-5">
        {product.length == 0 && <Loader />}
        <div className="row">
          <div className="col-md-2">
            {/* <Link
                  to="/admin/addcategory"
                  className={`nav-link ${
                    activeLink === "/admin/addcategory"
                      ? "bg-primary text-light"
                      : ""
                  }`}
                  // onClick={() => handleLinkClick("/admin/addcategory")}
                  style={{ color: "black" }}
                >
                  Add Category
                </Link> */}
            sidebar
          </div>
          <div className="col-md-10">
            <div className="row">
              {product.map((item, index) => {
                return <ProductItem key={product.id} product={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
