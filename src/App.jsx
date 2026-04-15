import { useState } from 'react'
import PlayerThrow from "./PlayerThrow";
import ComputerThrow from "./ComputerThrow";
import ResetButton from "./ResetButton";
import ResultDisplay from "./ResultDisplay";
import ScoreBoard from './ScoreBoard';
import "./style.css";



const choices = ["rock", "paper", "scissors"];

function winner(player, computer) {
  if (player == computer) {
    return "tie";
  } if ((player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")) {
    return "win";
  }
  return "lose";
}

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(null);
  const [score, setScore] = useState({
    win: 0,
    lose: 0,
    tie:0,
  });

  function play(choice) {
    if (isAnimating) return;

    setPlayerChoice(choice);
    setResult(null);
    setIsAnimating(true);

    let i = 0

    const interval = setInterval(() => {
      setComputerChoice(choices[i % 3]);
      i++;
    }, 500);

    setTimeout(() => {
      clearInterval(interval);

      const final =
        choices[Math.floor(Math.random() * choices.length)];

      setComputerChoice(final);
      const gameResult = winner(choice, final);
      setResult(gameResult);

      setScore((prev) => ({
        ...prev, [gameResult] : prev[gameResult] + 1,
      }));
      setIsAnimating(false);
    }, 3000)

  } return (
    <main className="container">
      <h1> Rock, Paper, Scissors</h1>

      <ScoreBoard score={score}></ScoreBoard>
      <PlayerThrow onPlay={play} disabled={isAnimating}></PlayerThrow>
      <ComputerThrow choice={computerChoice}></ComputerThrow>
      <ResultDisplay result={result}></ResultDisplay>
      <ResetButton onReset={resetGame}></ResetButton>
    </main>
  )

  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setIsAnimating(null);

    setScore({
      win:0,
      lose:0,
      tie:0,
    });
  }


}