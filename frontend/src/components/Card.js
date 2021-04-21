import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Card = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      {products.map((product) => (
        <div key={product.id} className="col-md-4  col-sm-6 p-5">
          <div className="card ">
            <img
              src={product.image}
              className="card-img-top "
              style={{ maxHeight: "280px", maxWidth: "330px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{product.item}</h5>
              <div className="row justify-content-around">
                <span className="card-text">{product.amount}</span>
                <span className="">
                  <Link to={"/products/" + product.id} className="  ">
                    Buynow
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}{" "}
    </>
  );
};

export default Card;
