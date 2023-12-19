 import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name:'Jika',
          id:'125saasdssads'
        },
        {
          name:'Muka',
          id:'12sadsads'
        },
        {
          name:'Meca',
          id:'125sads'
        },
        {
          name:'Kika',
          id:'125sad'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
      {this.state.monsters.map((monst) => {
        return <div key={monst.id}><h1>{monst.name}</h1></div>
      })}  
      </div>
    );
  }
}

export default App;
