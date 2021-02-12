
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    let first=new Date('1/1/' + (new Date().getFullYear()));
    let today=new Date();

    let diff= today - first;

    let days = diff / (1000*60*60*24);

    let total = 0;

    for(let i = 0; i <= days; i++)
    {
        total += i;
    }

    return (
      <div className="App">
        <div className="days-container">{days}</div>
        <div className="total-container">{total}</div>
      </div>
    );
  }
}

export default App;