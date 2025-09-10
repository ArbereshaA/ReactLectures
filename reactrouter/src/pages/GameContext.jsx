import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);

  const increaseScore = () => setScore(score + 1);
  const resetScore = () => setScore(0);

  return (
    <GameContext.Provider value={{ score, increaseScore, resetScore }}>
      {children}
    </GameContext.Provider>
  );
}

// GameContext with a score (number).

// Functions: increaseScore and resetScore.

// ScoreBoard shows the score.

// GameControls has buttons to increase or reset.

// Hint: Show how useContext avoids passing score and setScore through props
