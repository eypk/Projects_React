import Navbar from "./components/navbar";
import "./Styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar />
          <Route path="/" exact component={ProductList}></Route>
          <Route
            path="/product/:productId"
            exact
            component={ProductDetail}
          ></Route>
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}
