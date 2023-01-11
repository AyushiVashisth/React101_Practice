import axios from "axios"
import { useEffect, useState } from "react"

const getTodos = () => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts`,{
    params: {
       userId: 1,
   },
  });
};

function Todo() {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading] = useState([]);
  const [ err, setErr] = useState(false);

   useEffect(()=>{
    setLoading(true);
    getTodos()
        .then((res)=> {
          setData(res.data);
          setLoading(false);
      })
        .catch((err)=>{
          setErr(true);
          setLoading(false);
      });

   },[]);

  return (
    <div className="App">
      {/* <h/1>Hello</h1> */}
    </div>
  );
}

export default Todo;

//https
