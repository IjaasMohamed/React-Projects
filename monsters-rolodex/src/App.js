import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Fayaz", lastName: "Fouzer" },
      company: "Medical Empire",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I own{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              if (this.state.name.firstName === "Ijaas") {
                this.setState({
                  name: { firstName: "Fayaz", lastName: "Fouzer" },
                  company: "Medical Empire",
                });
              } else {
                this.setState({
                  name: { firstName: "Ijaas", lastName: "Fouzer" },
                  company: 'Empire'
                });
              }
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
