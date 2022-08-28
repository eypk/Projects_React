import "./Styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
