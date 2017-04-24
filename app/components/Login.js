// var moment = require('moment');
//
// let currentTime = moment();
// console.log(currentTime);
//
// const datesArray = [
//   new Date('April 27, 2017'),
//   new Date('April 20, 2017'),
//   new Date('05/04/2017'),
//   new Date('05/11/2017'),
//   new Date('01/01/1999')
// ];
//
// function getNextDates(date) {
//   if ( date >= moment() ) {
//     return date;
//   }
// }
//
// let nextDates = datesArray.filter(getNextDates);
//
// console.log(nextDates);


import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const TextFieldExampleSimple = () => (
  <div className="container">
    <div className="col">
      <TextField
        hintText="Email"
      /><br />
      <br />
      <TextField className="password"
        hintText="Password"
      /><br />
      <RaisedButton className="loginButton" label="Login" primary={true} style="margin:30 0" />
    </div>
  </div>
);

export default TextFieldExampleSimple;
