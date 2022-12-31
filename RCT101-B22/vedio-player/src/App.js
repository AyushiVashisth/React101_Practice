import './App.css';
import {useRef} from "react";

// useRef
// use reference

// useRef
// 1. you can maintain some value or information
// 2. you can reference this to an html element
// 3 you can also use it as a reference to an external api for submisssion etc.
// A. useRef, even though we can store data
// it does not trigger a re-render, or cause
// an update cycle
// The data can be mutated, which means we don't need to keep spreading


function App() {
  // const onClick = () => {
  //   const video = document.getElementById("video-player");
  //   video.play();
  // }

  const ref = useRef(null);
  // {current : null}

  const onPlay = () => {
    ref.current.play();
  }
  const onPause = () => {
    ref.current.pause();
  }


  return (
    <div className="App">
      <h1>Video</h1>
      <video ref={ref} id="video-player" controls width="250">
        <source 
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm" 
        />
        <source 
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/mp4" 
        />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div>
        <button onClick={onPlay}>PLAY</button>
        <button onClick={onPause}>PAUSE</button>
        <button>SKIP</button>
      </div>
    </div>
  );
}

export default App;
