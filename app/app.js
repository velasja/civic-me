import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router-dom';

// Reference the high-level components
import Main from "./components/Main";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from "./components/Login";
// import Agenda from "../components/Agenda";
import Register from "./components/Register";
// var Dashboard = require("../components/Dashboard");

const Root = () => {
  <MuiThemeProvider>
    <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Main} />
      <Match pattern="/register" component={Register} />
      <Match pattern="/login" component={Login} />
      {/* <Miss component={NotFound} /> */}
    </div>
    </BrowserRouter>
  </MuiThemeProvider>
}

ReactDOM.render(<Root />, document.querySelector('#app'));
