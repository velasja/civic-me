import React from 'react';
console.log(React);

import ReactDOM from 'react-dom';

import Root from "./config/routes";
console.log(Root);
import { BrowserRouter } from "./config/routes";
console.log(BrowserRouter);

//
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBarExampleIcon from './components/AppBar';
// import TextFieldExampleSimple from './components/Login';

// class Poop extends React.Component {
//   render() {
//     return <h1>PoooooooooooP💩</h1>
//   }
// }

ReactDOM.render(<BrowserRouter/>, document.getElementById('app'));
