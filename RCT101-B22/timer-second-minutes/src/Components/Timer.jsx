import React from 'react';

// 1. timer should start on click event and not on mount

const fixTimeString = (timeVal) => {
    return timeVal < 10 ? `0${timeVal}` : timeVal;
}
// time in seconds
const formatTimerToString = (time) => { //123
    const seconds = time % 60;  // 123%60 = 3
    const minutes = Math.floor(time / 60) % 60; // 2
    // console.log(seconds, minutes);
    return `${fixTimeString(minutes)}:${fixTimeString(seconds)}`;
};

formatTimerToString(123);
function Timer(){
const [count, setCount] = React.useState(200);
const timerRef = React.useRef(null);

React.useEffect(() => {
    const cleanup = () => {
        stopTimer();
    };
    return cleanup;
},[]);


    const startTimer = () => {
        // console.log(timerRef.current);
        if(timerRef.current !== null) return;
        timerRef.current = setInterval(() => {
            console.log(`setInterval is running`, Date.now());
            setCount((prevCount) => {
                if(prevCount === 1){
                    clearInterval(timerRef.current);
                    return 0;
                }
                return prevCount -1;
            });
        },1000); 
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current=null;
    };

    const resetTimer = () => {
        stopTimer();
        setCount(10);
    };

    return (
        <div>
            <h1>{formatTimerToString(count)}</h1>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
            <button onClick={resetTimer}>RESET</button>
        </div>

    )
}
export default Timer;