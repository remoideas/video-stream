import logo from "./logo.svg";
import "./App.css";
import ReactHlsPlayer from "react-hls-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactHlsPlayer
          src="http://192.168.5.150/hls/main/playlist.m3u8"
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </header>
    </div>
  );
}

export default App;
