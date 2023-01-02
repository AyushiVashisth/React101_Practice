import { useRef, useState } from "react";

export default function Image() {
  const [image, setImage] = useState("");
  const [loading,setLoading]=useState(false);
  const[done,setDOne]=useState(false);
  const ref = useRef(null);

  const handleImage = () =>{
    setLoading(true);
    setImage(URL.createObjectURL(ref.current.files[0]));
  }
const handleUpload=()=>{
  setLoading(false);
  setImage(null)
  setDOne(true)
}
  

  return (
    <div>
      <h1>Preview the image</h1>
      <input
        ref={ref}
        onChange={handleImage}
        type="file"
      />
        {loading && <img width="50px" height="50px" src={image} alt="avatar" /> } 
        {loading && <button onClick={handleUpload}> Upload</button>}
        {done &&<h3>Uploaded Successfully</h3>}
    </div>
  );
}
