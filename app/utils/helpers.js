import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const helpers = {
  // This will return any saved agenda items from our database
  getSaved() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new agenda items to our database
  postSaved(number, date, meeting, backup, link, text) {
    var newItem = { number: number, date: date, meeting: meeting, backup: backup,
      link: link, text: text};
    return axios.post("/api/saved", newItem)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // This will remove saved agenda items from our database
  deleteSaved(number, date, meeting, backup, link, text) {
    return axios.delete("/api/saved", {
      params: {
        "number": number,
        "date": date,
        "meeting": meeting,
        "backup": backup,
        "link": link,
        "text": text
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};


// We export the helpers function
export default helpers;
