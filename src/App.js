
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let today=new Date();
    let todayStr= "" + today.getFullYear() + today.getMonth() + today.getDate();

    var currentCount = Number.parseInt(localStorage.getItem(todayStr));

    currentCount = !currentCount ? 0 : currentCount;

    this.state = {
      todaysCount: currentCount,
      todayStr: todayStr
    };


  }

  changeValue(number) 
  {
    let newCount = this.state.todaysCount + number;

    if(newCount <= 0)
    {
      newCount = 0;
    }
    return () => {
      localStorage.setItem(this.state.todayStr, newCount);
      this.setState({
        todaysCount: newCount
      });
    };
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
            <div className="title">Today's Goal: {days}</div>
          </div>
          <div className="todays-count-container">
            <div className="change-value" onClick={this.changeValue(-5)}>-5</div>
            <div className="change-value" onClick={this.changeValue(-1)}>-1</div>
            <div className="todays-count">{this.state.todaysCount}</div>
            <div className="change-value" onClick={this.changeValue(1)}>+1</div>
            <div className="change-value" onClick={this.changeValue(5)}>+5</div>
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