import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Productscreen from "./Screens/Productscreen";
import Cards from "./components/Cards";
import Signin from "./Screens/Signin";
import "./main.css";
import CartScreen from "./Screens/CartScreen";
import Register from "./Screens/Register";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <div>
            {" "}
            <Navbar />
          </div>
        </div>
        <Switch>
          <Route path="/products/:id" component={Productscreen} />
          <Route path="/" exact={true} component={Cards} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
