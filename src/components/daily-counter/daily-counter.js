import React, { useState, useEffect } from 'react';

const DailyCounter = (props) => 
{
    const [todayStr, setTodayStr] = useState();
    const [pushupCount, setPushupCount] = useState();
    const [otherCount, setOtherCount] = useState();
    const [todaysGoal, setTodaysGoal] = useState();
    const [todaysTotal, setTodaysTotal] = useState();

    useEffect(() => {
        let today=new Date();
        let todayStrLocal = "" + today.getFullYear() + today.getMonth() + today.getDate();
        setTodayStr(todayStrLocal);
    
        let pushupKey = 'Pushups' + todayStrLocal;
        var pushupCurrentCount = Number.parseInt(localStorage.getItem(pushupKey));
        pushupCurrentCount = !pushupCurrentCount ? 0 : pushupCurrentCount;
        setPushupCount(pushupCurrentCount);
    
        let otherKey = 'Other' + todayStrLocal;
        var otherCurrentCount = Number.parseInt(localStorage.getItem(otherKey));
        otherCurrentCount = !otherCurrentCount ? 0 : otherCurrentCount;
        setOtherCount(otherCurrentCount);
    
        let first=new Date('1/1/' + (new Date().getFullYear()));
    
        let diff= today - first;
    
        let days = Math.ceil(diff / (1000*60*60*24));
    
        let total = 0;
        for(let i = 0; i <= days; i++)
        {
            total += i;
        }
    
        setTodaysGoal(days);
        setTodaysTotal(total);
    }, [setTodayStr, setPushupCount, setOtherCount, setTodaysGoal, setTodaysTotal]);

    

    let changeValue = (type, number) =>
    {
        if(type === "Pushups")
        {
            let key = type + todayStr;
            let newCount = pushupCount + number;
        
            if(newCount <= 0)
            {
                newCount = 0;
            }
            localStorage.setItem(key, newCount);
            setPushupCount(newCount);
        }
        else if (type === "Other")
        {
            let key = type + todayStr;
            let newCount = otherCount + number;
        
            if(newCount <= 0)
            {
                newCount = 0;
            }
            localStorage.setItem(key, newCount);
            setOtherCount(newCount);
        }
    }

    return (
        <div className="container" style={{maxWidth: "500px", marginTop: "10%"}}>
            <div className="total-container">
                <div className="todays-count">
                    <div className="type-title">Pushups</div>
                    <div className="todays-count-div">
                        <div>{pushupCount} / {todaysGoal}</div>
                    </div>
                </div>
                
                <div className="todays-count">
                    <div className="type-title">Other</div>
                    <div className="todays-count-div">
                        <div>{otherCount} / {todaysGoal}</div>
                    </div>
                </div>
            </div>
            <div className="control-title title">Pushups</div>
            <div className="todays-count-container">
                <div className="change-value" onClick={()=>{changeValue("Pushups",-5)}}>-5</div>
                <div className="change-value" onClick={()=>{changeValue("Pushups",-1)}}>-1</div>
                <div className="change-value" onClick={()=>{changeValue("Pushups",1)}}>+1</div>
                <div className="change-value" onClick={()=>{changeValue("Pushups",5)}}>+5</div>
                <div className="change-value" onClick={()=>{changeValue("Pushups",10)}}>+10</div>
            </div>
            <div className="control-title title">Other</div>
            <div className="todays-count-container">
                <div className="change-value" onClick={()=>{changeValue("Other",-5)}}>-5</div>
                <div className="change-value" onClick={()=>{changeValue("Other",-1)}}>-1</div>
                <div className="change-value" onClick={()=>{changeValue("Other",1)}}>+1</div>
                <div className="change-value" onClick={()=>{changeValue("Other",5)}}>+5</div>
                <div className="change-value" onClick={()=>{changeValue("Other",10)}}>+10</div>
            </div>
            <div className="item-container">
                <div className="title">Total Completed</div>
                <div className="value">{todaysTotal}</div>
            </div>
        </div>
    );
};

export default DailyCounter;