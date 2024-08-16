import { useState, useEffect } from "react";

import "./App.css";
import Grid from "./components/Grid/Grid.jsx";
import Controls from "./components/Controls/Controls.jsx";

function App() {
  const [robotPosition, setRobotPosition] = useState(12);
  const [robotDirection, setRobotDirection] = useState("down");
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    let arr = Array(25).fill(0);
    arr[robotPosition] = 1;
    setTiles(arr);
  }, [robotPosition]);

  return (
    <>
      <div class="h-screen bg-ocean-200 flex items-center justify-center flex-col gap-4">
        <Grid robotDirection={robotDirection} tiles={tiles}></Grid>
        <Controls
          robotDirection={robotDirection}
          setRobotDirection={setRobotDirection}
          robotPosition={robotPosition}
          setRobotPosition={setRobotPosition}
        ></Controls>
      </div>
    </>
  );
}

export default App;
