import React from "react";
import { HighlightPlayer } from "lvn-embed-api";
import "./App.css";

function App() {
  const [minimalPlayer, setMinimalPlayer] = React.useState<HighlightPlayer>();
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    // Will place the embed inside the element with the given id
    new HighlightPlayer("embed", 2726220);
    // Allows for custom
    setMinimalPlayer(
      new HighlightPlayer("embed-minimal", 2726220, {
        type: "minimal",
        width: "570",
        height: "210",
        textColor: "#ffffff",
        backgroundColor: "#2a2a2a",
        highlightColor: "#87CB9C",
        fontSize: "20px",
        fontWeight: "bold",
      })
    );
  }, []);

  const handlePlayToggle = () => {
    if (minimalPlayer) {
      if (minimalPlayer.getIsPlaying()) {
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
      <h2>Minimal (Customizable)</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "2px solid #87CB9C",
            padding: "2rem",
            paddingBottom: "0",
            borderRadius: "8px",
            backgroundColor: "#2a2a2a",
            color: "#ffffff",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <button onClick={handlePlayToggle} style={{ marginRight: "1rem" }}>
              {isPlaying ? "Pause" : "Play"}
            </button>
            <span>Tony</span>
          </div>
          <div className="App" id="embed-minimal"></div>
        </div>
      </div>
    </>
  );
}

export default App;
