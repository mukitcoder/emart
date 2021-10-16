import { Route, Switch } from "react-router";
import "./App.css";
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
        <Route  path="/home" component={Home} />
        <Route  path="/products" component={Products} />
        <Route  path="/products/:id" component={Product} />
        <Route path="*"/>
      </Switch>{" "}
    </>
  );
}

export default App;
