
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
function App() {
console.log('render')
  const [board, setBoard] = useState( () => { 
    console.log('inicializar estado del board');
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage) 
      return Array(9).fill(null)
})
  const[turn, setTurn] = useState(() => {
const turnFromStorage = window.localStorage.getItem('turn')
return turnFromStorage ?? TURNS.X
})
 // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const checkEndGame = (newBoard) => {
    // Empate si no hay más espacios vacíos (null)
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    //no actualizamos esta posicion  
    //si ya tiene algo
    
    if(board[index]||winner) return
    //actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar la partida 
    saveGameToStorage({
      board: newBoard,
      turn : newTurn
    })
   

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
      //  TODO: check if game is over 
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }
 
  return (
    <main className="board">
      <h1>Ta Te Ti</h1>
      <button onClick ={resetGame}>Resetear el Juego</button>
        <section className="game">
        {
          board.map((square, index) =>{
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
        </section>

        <section className="turn">
          <Square isSelected={turn===TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn===TURNS.O}>
            {TURNS.O}
          </Square>

        </section>

       <WinnerModal resetGame={resetGame} winner={winner} />
      
    </main>
  )
}

export default App
