import React from 'react';

function Timer() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        // this will be called during mount phase

        setInterval(() => {
            setCount((prevCount) => {
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