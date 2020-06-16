import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Customers from "./pages/Customers";
import Invoices from "./pages/Invoices";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/invoices" component={Invoices} />
      </Switch>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
