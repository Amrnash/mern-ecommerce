import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Prodcut from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={Login} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/product/:id" component={Prodcut} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
