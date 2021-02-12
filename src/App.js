
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

    let days = Math.round(diff / (1000*60*60*24));

    let total = 0;

    for(let i = 0; i <= days; i++)
    {
        total += i;
    }

    return (
      <div className="App">
        <div className="container">
          <div className="item-container">
            <div className="title">Today's Number</div>
            <div className="value">{days}</div>
          </div>
          <div className="item-container">
            <div className="title">Total Completed</div>
            <div className="value">{total}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;