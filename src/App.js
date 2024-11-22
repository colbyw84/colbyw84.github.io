import React, { useState } from 'react';
import './App.css';
import DailyCounter from './components/daily-counter/daily-counter';
import DailyTasks from './components/daily-tasks/daily-tasks';
import NewYearChallenge from './components/new-year-challenge/new-year-challenge';
import { BrowserRouter as useLocation } from 'react-router-dom';

const App = () => {
  var params = new URLSearchParams(useLocation().search);
  const [page] = useState(params.get('page')); // Initializing state if needed.

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  const getTab = () => {
    if(page === 'workout')
    {
      return <NewYearChallenge />
    }
    else if(page === 'tasks')
      {
        return <DailyTasks />
      }
    else if(page === 'counter')
      {
        return <DailyCounter />
      }
    else {
      return <DailyTasks />;
    }
  };

  return (
    <div className="App">
      <div className="container">
        {getTab()}
      </div>
    </div>
  );
};

export default App;
