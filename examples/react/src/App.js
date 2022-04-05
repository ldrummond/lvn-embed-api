import React from "react";
import { HighlightPlayer } from "lvn-embed-api";
import "./App.css";

function App() {
  const [player, setPlayer] = React.useState();
  const [minimalPlayer, setMinimalPlayer] = React.useState();
  const [players, setPlayers] = React.useState();
  React.useEffect(() => {
    setPlayer(new HighlightPlayer("embed", 161, { environment: "dev" }));
    setMinimalPlayer(
      new HighlightPlayer("embed-minimal", 161, {
        environment: "dev",
        type: "minimal",
        src: "http://0.0.0.0:10000",
        width: "570",
        height: "210",
      })
    );
    const players = [];
    setPlayers(players);
  }, []);
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
        <button
          onClick={() => {
            minimalPlayer && minimalPlayer.play();
          }}
        />
        <div className="App" id="embed-minimal"></div>
      </div>
    </>
  );
}

export default App;
