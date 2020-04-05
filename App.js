import React from 'react';

import Stock from './Container/Stock';
import './App.css';

import axios from "axios";



function App() {
  return (
    <div className="App">
      <Stock></Stock>
    </div>
  );
}



function changeBackground(color) {
   document.body.style.background = color;
}
window.addEventListener("load",function() { changeBackground('#122') });



/*---------------------------------------------------------------------*/
/*class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }



    componentDidMount() {
          fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e10eca7e6be44f1ba17d9804bec868d3') 
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
    }


    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded)
            return <div>Loading...</div>;

        return (
        <div className="boxes">  
          <button>
            <div className="App">
                <ul>
                    {items.map(item => (  
                        <li key={item.id}>   
                             {item.name} - {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        </button>
      </div>

        );
    }
}*/


export default App;



