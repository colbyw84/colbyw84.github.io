import React, { useState, useEffect } from 'react';
import './timer.css';
import { Icon } from '@mui/material';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.time);
  const [isActive, setIsActive] = useState(props.active);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(props.time);
    setIsActive(false);
  }

  useEffect(() => {
    setIsActive(props.active);
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="item-container">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <Icon color="white" sx={{ fontSize: 30, paddingRight: '1rem' }} onClick={toggle}>{isActive ? 'stop_circle' : 'play_arrow'}</Icon>
        <Icon color="white" sx={{ fontSize: 30 }} onClick={reset}>refresh</Icon>
      </div>
    </div>
  );
};

export default Timer;