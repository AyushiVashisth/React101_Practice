import React from 'react';

function Timer() {
    const [count, setCount] = React.useState(10);

    React.useEffect(() => {
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

        // const cleanup = 
        return () => {
            console.log(`cleanup is called`);
            clearInterval(intervalID);
        };
        // return cleanup;
    },[]);

    return (
        <>
          <h1>Timer : {count}</h1>
        </>
    );
}

export default Timer;