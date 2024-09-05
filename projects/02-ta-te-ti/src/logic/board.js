 import { WINNER_COMBOS } from "../constants"
 
 export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

export  const checkEndGame = (newBoard) => {
    // Verifica si el juego ha terminado en empate
    // Retorna true si no hay más espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
  
    }
  
