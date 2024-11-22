import React, { useState, useEffect } from 'react';
import './exercise.css';
import { Icon } from '@mui/material';
import Timer from '../timer/timer';

const Exercise = (props) => 
{
    const [complete, setComplete] = useState(false);
    // const [reps, setReps] = useState(10);
    // const [count, setCount] = useState();

    useEffect(() => {

    }, []);

    
    // let changeValue = (type, number) =>
    // {
    //     
    // };

    let onComplete = () =>
    {
        setComplete(true);
    };

    return (
        <div className="exercise-container">
            {
                props.data.map(function(object, i){
                    return (
                        <div>
                            <div className="set-container item-container" style={{}}>
                                <div className="set-item flex-center">{object.reps}</div>
                                <div>{props.name}</div>
                                <div className="flex-center" style={{marginLeft: "auto"}}><Icon onClick={onComplete} color="white" sx={{ fontSize: 30 }}>{!complete ? 'radio_button_unchecked':'check_circle'}</Icon></div>
                            </div>
                            <Timer time={60} active={complete}/>
                        </div>
                    );
                })
            }
            
        </div>
    );
};

export default Exercise;