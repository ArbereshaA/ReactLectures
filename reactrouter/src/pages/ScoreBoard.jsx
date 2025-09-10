import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function ScoreBoard() {
  const { score } = useContext(GameContext);

  return <h2>Score: {score}</h2>;
}
