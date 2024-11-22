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
            <h1 style={style.header}>Supplements</h1>
            <Task name="Creatine" selector="creatine" todayStr={todayStr}/>
            <Task name="Multi-Vitamin" selector="multi-vitamin" todayStr={todayStr}/>
            <Task name="Knee-Vitamin" selector="knee-vitamin" todayStr={todayStr}/>
            <Task name="Water Bottle 1 (50oz)" selector="water-1" todayStr={todayStr}/>
            <Task name="Water Bottle 2 (50oz)" selector="water-2" todayStr={todayStr}/>
            <Task name="Fish Oil 1" selector="fish-oil-1" todayStr={todayStr}/>
            <Task name="Fish Oil 2" selector="fish-oil-2" todayStr={todayStr}/>
            <Task name="Fish Oil 3" selector="fish-oil-3" todayStr={todayStr}/>
            <Task name="Vitamin C" selector="vitamin-c" todayStr={todayStr}/>
            <h1 style={style.header}>Exercises</h1>
            <Task name="ATG Split Squat" selector="atg-split-squat" todayStr={todayStr}/>
            <Task name="Tip Raises" selector="tib-raises" todayStr={todayStr}/>
            <Task name="Nordic Curls" selector="nordic-curls" todayStr={todayStr}/>
        </div>
    );
};

export default DailyTasks;