
import React, {Component} from 'react';
import './App.css';
import DailyCounter from './components/daily-counter/daily-counter';
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

  render() {

    return (
      <div className="App">
        <div  className="container">
          <Routes>
            <Route path="workout" element={<NewYearChallenge />} />
            <Route path="*" element={<DailyCounter />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;