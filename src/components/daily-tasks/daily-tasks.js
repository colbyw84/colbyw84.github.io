import React, { useState, useEffect } from 'react';
import Task from '../task/task'

const DailyTasks = (props) => 
{
    const [todayStr, setTodayStr] = useState('');

    useEffect(() => {
        let today=new Date();
        let todayStrLocal = "" + today.getFullYear() + today.getMonth() + today.getDate();
        setTodayStr(todayStrLocal);
    }, []);

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
        }
    };

    return (
        <div style = { style.mainContainer }>
            <h1 style={style.header}>Daily Tasks</h1>
            <Task name="Hit Protein" selector="protein" todayStr={todayStr}/>
            <Task name="Hit Steps" selector="steps" todayStr={todayStr}/>
            <Task name="Track Calories" selector="cal" todayStr={todayStr}/>
            <Task name="Workout" selector="workout" todayStr={todayStr}/>
            <Task name="Creatine" selector="creatine" todayStr={todayStr}/>
            <Task name="Multi-Vitamin" selector="multi-vitamin" todayStr={todayStr}/>
            <Task name="Knee-Vitamin" selector="knee-vitamin" todayStr={todayStr}/>
        </div>
    );
};

export default DailyTasks;