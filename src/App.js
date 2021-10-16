import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbars from "./components/Navbars";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbars></Navbars>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="*"/>
      </Switch>{" "}
      <Footer></Footer>
    </>
  );
}

export default App;
