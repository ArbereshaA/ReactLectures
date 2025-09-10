import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function GameControls() {
  const { increaseScore, resetScore } = useContext(GameContext);

  return (
    <div>
      <button onClick={increaseScore}>+1 Point</button>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}
