import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import CartContextProvider from "../src/context/cartContext"
import Cart from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";

function App() {
 
  return (
    <CartContextProvider> 
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route exact path="/">
            <Home greeting="Productos"/>
          </Route>

          <Route exact path="/productos/:id">
            <DetailPage/>
          </Route>

          <Route exact path="/categorias/:category">
            <ItemListContainer greeting="Productos" />
          </Route>

          <Route exact path="/cart">
            <Cart/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
    <div>
    <Footer />
    </div>
    </CartContextProvider>
  );
}

export default App;
