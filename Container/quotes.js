import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";


//API Key
const defaultKey = "bq0onh7rh5rd3g5ph0a0";


function quotes() {

  let history=useHistory();

  useEffect(() => {

  //make request for the quotes by symbol
  const request = require('request');
  axios.get('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bq0onh7rh5rd3g5ph0a0', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
});

}, [symbol]);


