import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);
  return (
    <>
      <div className="pt-5">
        <div className=" pt-5 ">
          <div className="row justify-content-center">
            <div className=" col-5 border">
              <div className=" p-4 ">
                <h2 className=" text-center">Sign in Form</h2>
                <div className=" py-md-4">
                  <form onSubmit={submitHandler}>
                    {loading && <div>Loading ....</div>}
                    {error && <div>{error}</div>}
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mx-auto">
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <p>
                  {" "}
                  Don't have an account,{" "}
                  <Link
                    to={
                      redirect === "/"
                        ? "register"
                        : "register?redirect=" + redirect
                    }
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
