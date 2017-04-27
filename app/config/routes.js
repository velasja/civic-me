import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// Reference the high-level components
import Main from "../components/Main";
import Login from "../components/Login";
// import Agenda from "../components/Agenda";
import Register from "../components/Register";
// var Dashboard = require("../components/Dashboard");

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Main} />
          <Match pattern="/register" component={Register} />
          <Match pattern="/login" component={Login} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Root;
