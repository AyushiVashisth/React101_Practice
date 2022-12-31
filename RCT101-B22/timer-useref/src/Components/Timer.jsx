import React from 'react';

function Timer(){
const [count, setCount] = React.useState(10);
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
            <h1>Timer : {count}</h1>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
            <button onClick={resetTimer}>RESET</button>
        </div>

    )
}
export default Timer;