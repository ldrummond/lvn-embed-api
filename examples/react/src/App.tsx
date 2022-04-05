import React from "react";
import { HighlightPlayer } from "lvn-embed-api";
import "./App.css";

function App() {
  const [minimalPlayer, setMinimalPlayer] = React.useState<HighlightPlayer>();
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    // Will place the embed inside the element with the given id
    new HighlightPlayer("embed", 161, { environment: "dev" });
    // Allows for custom
    setMinimalPlayer(
      new HighlightPlayer("embed-minimal", 161, {
        environment: "dev",
        type: "minimal",
        src: "http://0.0.0.0:10000",
        width: "570",
        height: "210",
      })
    );
  }, []);

  const handlePlayToggle = () => {
    if (minimalPlayer) {
      if (minimalPlayer.isPlaying) {
        minimalPlayer.pause();
      } else {
        minimalPlayer.play();
      }
      setIsPlaying(minimalPlayer.isPlaying);
    }
  };

  return (
    <>
      <h2>Default</h2>
      <div className="App" id="embed"></div>
      <h2>Minimal</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handlePlayToggle}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className="App" id="embed-minimal"></div>
      </div>
    </>
  );
}

export default App;
