import React from "react";
import { HighlightPlayer } from "lvn-embed-api";
import "./App.css";

function App() {
  const [minimalPlayer, setMinimalPlayer] = React.useState<HighlightPlayer>();
  const [isPlaying, setIsPlaying] = React.useState(false);
  console.log("render");

  const handleReady = (player) => {
    console.log("handle ready");

    player.on("ended", () => {
      console.log("ended");
    });
    player.on("play", () => {
      console.log("play");
    });
    player.on("pause", () => {
      console.log("pause");
    });
    player.on("error", () => {
      console.log("error");
    });
    player.on("timeupdate", () => {
      console.log("timeupdate");
    });
  };

  React.useEffect(() => {
    console.log("use effect");
    // new HighlightPlayer({ containerId: "embed", highlightId: 2726220 });
    // // Allows for custom
    // setMinimalPlayer(
    //   new HighlightPlayer({
    //     containerId: "embed-minimal",
    //     highlightId: 2726220,
    //     highlightOptions: {
    //       type: "minimal",
    //       width: "570",
    //       height: "210",
    //       textColor: "#ffffff",
    //       backgroundColor: "#2a2a2a",
    //       highlightColor: "#87CB9C",
    //       fontSize: "20px",
    //       fontWeight: "bold",
    //       scrolling: true,
    //       fontFamily: "Oswald",
    //       italics: true,
    //       audioControls: true,
    //     },
    //     onReady: handleReady,
    //   })
    // );
    // Dev Testing
    // new HighlightPlayer({
    //   containerId: "embed",
    //   highlightId: 1001,
    //   highlightOptions: { src: "https://origin-embed.fora-dev.io/" },
    // });
    // Allows for custom
    setMinimalPlayer(
      new HighlightPlayer({
        containerId: "embed-minimal",
        highlightId: 5247318,
        highlightOptions: {
          type: "minimal",
          width: "570",
          height: "210",
          textColor: "#ffffff",
          backgroundColor: "#2a2a2a",
          highlightColor: "#87CB9C",
          fontSize: "20px",
          fontWeight: "bold",
          scrolling: true,
          fontFamily: "Oswald",
          italics: true,
          audioControls: true,
          environment: "prod",
          src: "https://embed.lvn.org/",
        },
        onReady: handleReady,
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
      minimalPlayer.getDuration((duration) => console.log(duration));
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
            <span>Darren</span>
          </div>
          <div className="App" id="embed-minimal"></div>
        </div>
      </div>
    </>
  );
}

export default App;
