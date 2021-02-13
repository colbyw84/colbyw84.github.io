
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let today=new Date();
    let todayStr= "" + today.getFullYear() + today.getMonth() + today.getDate();

    let pushupKey = 'Pushups' + todayStr;
    var pushupCurrentCount = Number.parseInt(localStorage.getItem(pushupKey));
    pushupCurrentCount = !pushupCurrentCount ? 0 : pushupCurrentCount;

    let otherKey = 'Other' + todayStr;
    var otherCurrentCount = Number.parseInt(localStorage.getItem(otherKey));
    otherCurrentCount = !otherCurrentCount ? 0 : otherCurrentCount;

    let first=new Date('1/1/' + (new Date().getFullYear()));

    let diff= today - first;

    let days = Math.ceil(diff / (1000*60*60*24));

    let total = 0;
    for(let i = 0; i <= days; i++)
    {
        total += i;
    }

    var newState = {};
    newState[pushupKey] = pushupCurrentCount;
    newState[otherKey] = otherCurrentCount;
    newState['todaysGoal'] = days;
    newState['todaysTotal'] = total;
    newState['todayStr'] = todayStr;

    this.state = newState;
  }

  changeValue(type, number) 
  {

    return () => {
      let key = type + this.state.todayStr;
      let newCount = this.state[key] + number;
  
      if(newCount <= 0)
      {
        newCount = 0;
      }
      localStorage.setItem(key, newCount);
      var newState = {};
      newState[key] = newCount;
      this.setState(newState);
    };
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <div className="total-container">
            <div className="todays-count">
              <div className="type-title">Pushups</div>
              <div className="todays-count-div">
                
                <div>{this.state["Pushups" + this.state.todayStr]} / {this.state.todaysGoal}</div>
              </div>
            </div>
            
            <div className="todays-count">
              <div className="type-title">Other</div>
              <div className="todays-count-div">
                <div>{this.state["Other" + this.state.todayStr]} / {this.state.todaysGoal}</div>
              </div>
            </div>
          </div>
          <div className="control-title title">Pushups</div>
          <div className="todays-count-container">
            <div className="change-value" onClick={this.changeValue("Pushups",-5)}>-5</div>
            <div className="change-value" onClick={this.changeValue("Pushups",-1)}>-1</div>
            <div className="change-value" onClick={this.changeValue("Pushups",1)}>+1</div>
            <div className="change-value" onClick={this.changeValue("Pushups",5)}>+5</div>
            <div className="change-value" onClick={this.changeValue("Pushups",10)}>+10</div>
          </div>
          <div className="control-title title">Other</div>
          <div className="todays-count-container">
            <div className="change-value" onClick={this.changeValue("Other",-5)}>-5</div>
            <div className="change-value" onClick={this.changeValue("Other",-1)}>-1</div>
            <div className="change-value" onClick={this.changeValue("Other",1)}>+1</div>
            <div className="change-value" onClick={this.changeValue("Other",5)}>+5</div>
            <div className="change-value" onClick={this.changeValue("Other",10)}>+10</div>
          </div>
          <div className="item-container">
            <div className="title">Total Completed</div>
            <div className="value">{this.state.todaysTotal}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;