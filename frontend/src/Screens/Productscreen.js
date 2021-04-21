import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
const Productscreen = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const [qty, setQty] = useState(1);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);
  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return loading ? (
    "...loading"
  ) : error ? (
    { error }
  ) : (
    <>
      <div className="row pt-5">
        <img src={product.image} className="col-md-4" />

        <div className="col-md-4 pt-5 ">
          <div id="product-description" className="p-5">
            <div>
              <div className="">
                <h4 className=""> {product.item}</h4>
                <h5 className=""> Price : {product.amount}</h5>
                <h5 className=""> Ratings : {product.rating}/ 5</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 pt-5 ">
          <div id="" className="p-5">
            <div>
              <div className="">
                <h5 className=""> Price : {product.amount}</h5>
                <h5 className=""> Ratings : {product.rating} / 5</h5>
                Qty :
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className=" ">
              <div>
                <p>
                  Status:
                  {product.countInStock < 1 ? " Un available" : " In Stock"}
                </p>
              </div>
              {product.countInStock > 1 && (
                <button className="btn btn-warning" onClick={handleAddToCart}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productscreen;
