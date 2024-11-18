
import React, {Component} from 'react';
import './App.css';
import DailyCounter from './components/daily-counter/daily-counter';
import DailyTasks from './components/daily-tasks/daily-tasks';
import NewYearChallenge from './components/new-year-challenge/new-year-challenge';
import { Routes, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  responseGoogle(response) {
    console.log(response);
  }

  getTab() {
    return 
  }

  render() {

    return (
      <div className="App">
        <div  className="container">
          <Routes>
            <Route path="?page=workout" element={<NewYearChallenge />} />
            <Route path="?page=daily-tasks" element={<DailyTasks />} />
            <Route path="?page=daily-counter" element={<DailyCounter />} />
            <Route path="*" element={<DailyTasks />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
