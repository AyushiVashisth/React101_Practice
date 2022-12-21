import { useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef(null);

  const onPlay = () => {
    ref.current.play();
  };
  const onPause = () => {
    ref.current.pause();
  };

  console.log("Date", Date.now());
  return (
    <div className="App">
      <h1>Video</h1>
      <video ref={ref} controls width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm"
        />
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/mp4"
        />
        Download the
        <a href="/media/cc0-videos/flower.webm">WEBM</a>or
        <a href="/media/cc0-videos/flower.mp4">MP4</a>video.
      </video>
      <div>
        <button onClick={onPlay}>Play</button>
        <button onClick={onPause}>Pause</button>
        <button>Skip</button>
      </div>
    </div>
  );
}
