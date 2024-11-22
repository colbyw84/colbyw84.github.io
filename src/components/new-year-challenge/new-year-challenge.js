import React, { useState, useEffect } from 'react';
import Exercise from '../exercise/exercise';

const NewYearChallenge = (props) => 
{
    const [todayStr, setTodayStr] = useState();
    //const [pushupCount, setPushupCount] = useState();
    //const [otherCount, setOtherCount] = useState();
    //const [todaysGoal, setTodaysGoal] = useState();
    //const [todaysTotal, setTodaysTotal] = useState();

    useEffect(() => {

        let today=new Date();
        let todayStrLocal = "" + today.getFullYear() + today.getMonth() + today.getDate();
        setTodayStr(todayStrLocal);

    }, [setTodayStr]); //setPushupCount, setOtherCount, setTodaysGoal, setTodaysTotal

    return (
        <div className="container">
            <Exercise name="Pushups" key={"PushupCount" + todayStr} data={[
                {
                    reps: 30,
                    rest: 30
                },
                {
                    reps: 30
                },
                {
                    reps: 30
                }
            ]}/>
            <Exercise name="Situps" key={"SitupCount" + todayStr} data={[
                {
                    reps: 30,
                    rest: 30
                },
                {
                    reps: 30
                },
                {
                    reps: 30
                }
            ]}/>
            <Exercise name="Squats" key={"SquatCount" + todayStr} data={[
                {
                    reps: 30,
                    rest: 30
                },
                {
                    reps: 30
                },
                {
                    reps: 30
                }
            ]}/>
        </div>
    );
};

export default NewYearChallenge;