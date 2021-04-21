import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  console.log(productId);
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  console.log(Number(props.location.search.split("=")[1]));
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  console.log(cartItems);
  return (
    <div className="cart pl-2 my-5">
      <div className="cart-list ">
        <ul className="pt-5">
          <h3>Shopping Cart</h3>

          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li
                key={item.name}
                style={{ listStyle: "none", border: "1px solid grey" }}
                className="my-4"
              >
                <div className="row">
                  <div className="cart-image col-4">
                    <img
                      src={item.image}
                      alt="product"
                      style={{ width: "250px" }}
                    />
                  </div>
                  <div className="pt-5 pl-5">
                    <h1>
                      <Link to={"/products/" + item.product}>{item.name}</Link>
                    </h1>
                    <h5>
                      <div className="cart-price">${item.amount * 1}</div>
                    </h5>
                    <div>
                      Qty:
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.product, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <br />
                      <br />
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action pl-5">
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${" "}
          {cartItems.reduce((a, c) => a + c.amount * c.qty, 0)}
        </h3>
        <button
          onClick={checkoutHandler}
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
