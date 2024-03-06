import React, { useEffect } from "react";
import ProductList from "./ProductList";
import useFetchCollection from "../CustomeHook/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCT, selectproduct } from "../Redux/productSlice";
import Loader from "./Loader";
import { selectsearch, selectsearchs } from "../Redux/searchSlice";

const Product1 = () => {
  const { data, isLoading } = useFetchCollection("products");
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(STORE_PRODUCT(data));
  }, [data]);
  let products = useSelector(selectproduct);
  let searchProduct = useSelector(selectsearchs);
  console.log(searchProduct);
  return (
    <>
      {isLoading && <Loader />}
      {searchProduct.length == 0 ? (
        <ProductList product={products} />
      ) : (
        <ProductList product={searchProduct} />
      )}
    </>
  );
};

export default Product1;
