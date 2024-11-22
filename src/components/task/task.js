import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

const Task = (props) => 
{
    const [todayStr] = useState(props.todayStr);

    const [elementKey] = useState(props.selector);

    const [checked, setChecked] = useState(false);


    useEffect(() => {

        let key = elementKey + '-' + todayStr;
        setChecked(localStorage.getItem(key) === 'true' ? true : false);
    }, [elementKey, todayStr]);

    const handleChange = (event) => {
        let key = elementKey + '-' + todayStr;

        setChecked(event.target.checked);

        localStorage.setItem(key, event.target.checked);
     };

    const style = {
        taskContainer: {
            display: 'flex',
            flexDirection: 'row',
            background: 'white',
            marginBottom: '10px'
        },
        labelStyle: {
            paddingLeft: "10px",
            paddingTop: "9px",
            paddingBottom: "9px"
        },
        checkboxStyle: {
            marginLeft: "auto"
        }
    };

    return (
        <div style = { style.taskContainer }>
            <div style = { style.labelStyle }>{props.name}</div>
            <Checkbox style={ style.checkboxStyle } checked={checked} onChange={handleChange} name={props.key} />
        </div>
    );
};

export default Task;