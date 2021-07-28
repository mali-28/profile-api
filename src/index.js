import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./routes/Landing";
import Home from './routes/Home';
import registerServiceWorker from "./registerServiceWorker";
import Users from './routes/Users';
import User from './routes/User';
import { BrowserRouter, Route } from "react-router-dom";
import Context from "./context";
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Context>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route exact path="/users" component={Users}/>
      <Route exact path='/user/:name' component={User}></Route>
      </Context>
    </div>

  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
