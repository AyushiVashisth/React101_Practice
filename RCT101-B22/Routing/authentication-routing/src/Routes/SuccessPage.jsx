import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage(){
    const [ count, setCount ] = useState(5);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        ref.current= setInterval(() => {
            setCount((prev) => {
                if(prev === 1){
                    clearInterval(ref.current);
                    navigate("/")
                }
                return prev-1;
            });
        },1000);
        return () => {
            clearInterval(ref.current);
        };
    },[]);

    // if(count === 0){
    //     return <Navigate to="/" />;
    // }

    return (
        <div>
            <h1>Successfully made the purchase</h1>
            <h3>Redirecting is {count} second</h3>
        </div>
    )

}

export default SuccessPage;