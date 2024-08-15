import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Service from "./Service";
import About from "./About";
import NavBar from "./Navbar";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

const App = () => {
  return (
    <>
    
      <Switch>
        <Route path="/" exact  component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/service" component={Service} /> */}
        <Route path="/contact" component={Contact} />
        <Redirect to ="/" />
      </Switch>
    </>
  );
};

export default App;
