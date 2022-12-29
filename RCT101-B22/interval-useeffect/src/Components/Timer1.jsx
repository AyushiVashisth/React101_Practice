import React from 'react';

function Timer() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        // this will be called during mount phase
        const intervalID = setInterval(() => {
            setCount(() => {
                console.log(prevCount);
                if(prevCount === 1){
                    clearInterval(intervalID);
                }
            })
        })
    },[]);

    return (
        <>
          <h1>Timer : {count}</h1>
        </>
    );
}

export default Timer;