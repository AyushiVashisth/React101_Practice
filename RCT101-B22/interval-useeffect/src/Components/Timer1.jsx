import React from 'react';

function Timer() {
    const [count, setCount] = React.useState(5);

    React.useEffect(() => {
        // this will be called during mount phase
        const intervalID = setInterval(() => {
            setCount((prevCount) => {
                console.log(prevCount);
                if(prevCount === 1){
                    clearInterval(intervalID);
                    return 0;
                }
                return prevCount -1;
            });
        },1000);
    },[]);

    return (
        <>
          <h1>Timer : {count}</h1>
        </>
    );
}

export default Timer;