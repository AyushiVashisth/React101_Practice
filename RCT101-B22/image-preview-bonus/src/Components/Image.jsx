import { useRef, useState } from "react";

export default function Image() {
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleImage = () => {
    setImage(URL.createObjectURL(ref.current.files[0]));
  }

  const handleShow = () => {
    setShow(!show)
  };

  return (
    <div>
      <h1>Preview the image</h1>
      <input
        ref={ref}
        onChange={handleImage}
        type="file"
      />
      <br />
      <br />
      {show && <div><img width="260px" height="320px" src={image} alt="avatar" /></div>}
      <br />
      <button onClick={handleShow}>
        {show ? "Hide Image" : "Show Image"}
      </button>
      
    </div>
  );
}
