const { useState } = React;

export function Board() {
const[board, setBoard] = useState(Array(9).fill(null));

const[player, setPlayer] = useState("X");

const [winner, setWinner] = useState(null);

function calculateWinner(squares) {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

function handleClick(index) {
  if (board[index] || winner) return;

  const newBoard = [...board];
  newBoard[index] = player;

  const gameWinner = calculateWinner(newBoard);
  if (gameWinner) {
    setWinner(gameWinner);
  } else {
    setPlayer(player === "X" ? "O" : "X");
  }

  setBoard(newBoard);
}



   function resetGame() {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  }
 const isDraw = !winner && board.every(square => square !== null);



return(
  <>
  <h1>Tic - Tac - Toe</h1>
  <h2>Next player:{player}</h2>
  <div className="board">{board.map((value, index) => (
<button
  className="square"

key={index}
onClick= {() => handleClick(index)}>
{value}
</button>

))}</div>
<button id="reset" onClick={resetGame}>Reset Game</button>
<p>{winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a draw!"
    : `Next player: ${player}`}</p>
</>

)
}
