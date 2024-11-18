import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

const DailyTasks = (props) => 
{
    const [todayStr, setTodayStr] = useState('');

    const [proteinChecked, setProteinChecked] = useState(false);
    const [stepsChecked, setStepsChecked] = useState(false);
    const [calChecked, setCalChecked] = useState(false);
    const [workoutChecked, setWorkoutChecked] = useState(false);


    useEffect(() => {
        let today=new Date();
        let todayStrLocal = "" + today.getFullYear() + today.getMonth() + today.getDate();
        setTodayStr(todayStrLocal);

        let proteinKey = 'protein-task-' + todayStrLocal;
        setProteinChecked(localStorage.getItem(proteinKey) === 'true' ? true : false);
        let stepsKey = 'steps-task-' + todayStrLocal;
        setStepsChecked(localStorage.getItem(stepsKey) === 'true' ? true : false);
        let calKey = 'cal-task-' + todayStrLocal;
        setCalChecked(localStorage.getItem(calKey) === 'true' ? true : false);
        let workoutKey = 'workout-task-' + todayStrLocal;
        setWorkoutChecked(localStorage.getItem(workoutKey) === 'true' ? true : false);
    }, []);

    const handleChange = (event) => {
        let key = event.target.name + '-' + todayStr;

        switch(event.target.name){
            case 'protein-task':
                setProteinChecked(event.target.checked);
                break;
            case 'steps-task':
                setStepsChecked(event.target.checked);
                break;
            case 'cal-task':
                setCalChecked(event.target.checked);
                break;
            case 'workout-task':
                setWorkoutChecked(event.target.checked);
                break;
            default:
        }

        localStorage.setItem(key, event.target.checked);
     };

    const style = {
        mainContainer: {
            width: 'calc(100% - 1rem)',
            padding: '0rem 1rem'
        },
        header: {
            color: 'white',
            fontColor: 'white'
        },
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
        <div style = { style.mainContainer }>
            <h1 style={style.header}>Daily Tasks</h1>
            <div style = { style.taskContainer }>
                <div style = { style.labelStyle }>Hit Protein</div>
                <Checkbox style={ style.checkboxStyle } checked={proteinChecked} onChange={handleChange} name="protein-task" />
            </div>
            <div style = { style.taskContainer }>
                <div style = { style.labelStyle }>Hit Steps</div>
                <Checkbox style={ style.checkboxStyle } checked={stepsChecked} onChange={handleChange} name="steps-task" />
            </div>
            <div style = { style.taskContainer }>
                <div style = { style.labelStyle }>Track Calories</div>
                <Checkbox style={ style.checkboxStyle } checked={calChecked} onChange={handleChange} name="cal-task" />
            </div>
            <div style = { style.taskContainer }>
                <div style = { style.labelStyle }>Workout</div>
                <Checkbox style={ style.checkboxStyle } checked={workoutChecked} onChange={handleChange} name="workout-task" />
            </div>
        </div>
    );
};

export default DailyTasks;