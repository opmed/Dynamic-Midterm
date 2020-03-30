import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";


//API Key
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('3123ae9487ce4711a1ca4f2275a963f1');


function Home() {

    useEffect(() => {

    //make request for the news by business category
    	axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3123ae9487ce4711a1ca4f2275a963f1`)
   .then(function (response) {
    // handle success
    setNewsData(response.data);
  })
    .catch(function (error) {
    // handle error
  });

}, [business]);

export default news;
