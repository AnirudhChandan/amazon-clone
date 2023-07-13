import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51NRKdkSGdggXhtrctnXw7BsWnkeXoSwRsRYKxZ7o17Nqx55wvPdMQJwSpm4BCXZoSPiIFW9KOrPAFAwoUylvfEt100BhWELocF"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Will only rum once the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is : ", authUser);

      if (authUser) {
        //The user was Logged In / The user just Logged In

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user was logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
