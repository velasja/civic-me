import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './components/AppBar';
import TextFieldExampleSimple from './components/Login';

// class Poop extends React.Component {
//   render() {
//     return <h1>PoooooooooooP💩</h1>
//   }
// }

const App = () => (
  <MuiThemeProvider>
    <TextFieldExampleSimple />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#app'));
