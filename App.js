import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.css"
import news from '../container/news';
import quotes from '../container/quotes';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={news} />
        <Route exact path="/search" component={quotes} />
      </Router>
    </div>
  );
}


/*Change background color*/
function changeBackground(color) {
   document.body.style.background = color;
}
window.addEventListener("load",function() { changeBackground('lightblue') });



export default App;



