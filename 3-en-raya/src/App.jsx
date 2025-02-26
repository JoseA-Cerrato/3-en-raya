import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Square } from './Components/Square/Square.jsx'
import './App.css'

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isTurn_X, setTurn] = useState(true);
  function clickSquare(i) {
    const nextSquares = history.slice();
    if (isTurn_X ){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }

    //TODO --> Comprobaciones de victoria
    setHistory(nextSquares);
    setTurn(!isTurn_X)


  }
  return (
    <>
    <div className="board-row" >

      <Square value={history[0]} onClickedSquare={() => clickSquare(0)}></Square>
      <Square value={history[1]} onClickedSquare={() => clickSquare(1)}></Square>
      <Square value={history[2]} onClickedSquare={() => clickSquare(2)}></Square>
      </div>
      <div className="board-row" >
      <Square value={history[3]} onClickedSquare={() => clickSquare(3)}></Square>
      <Square value={history[4]} onClickedSquare={() => clickSquare(4)}></Square>
      <Square value={history[5]} onClickedSquare={() => clickSquare(5)}></Square>
      </div>
      <div className="board-row" >
      <Square value={history[6]} onClickedSquare={() => clickSquare(6)}></Square>
      <Square value={history[7]} onClickedSquare={() => clickSquare(7)}></Square>
      <Square value={history[8]} onClickedSquare={() => clickSquare(8)}></Square>
    </div>

    </>
  )
}

export default App
