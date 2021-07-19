/**
 * Used to check the turn either X or O and change value of current
 * player turn specifically.
 */

export default class Games {
  constructor() {
    console.log('in Games.js')
    this.turn = 'X' //initial turn
    this.board = new Array(9).fill(null) //creating array of 9 elements filles with null initially
  }

  nextTurn() {
    if (this.turn == 'X') {
      this.turn = 'O'
    } else {
      this.turn = 'X'
    }
  }

  makeMove(i) {
    //Checking if already winner is declared or not, and stopping as the case maybe.

    if (this.stopGame()) {
      return
    }

    //restricting player to not change the value once inputted i.e. 'X' or 'O'

    if (this.board[i]) {
      return
    }

    this.board[i] = this.turn
    let winner = this.winningCombination()
    console.log(` winner is : ${winner}`)
    //If winner is not fount till now, just continue the game.
    if (!winner) {
      this.nextTurn()
    }
  }

  //These are matrix or board index at which three consecutive rows, columns or diagonal makes a player winner.
  winningCombination() {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ]
    for (const winningCombination of combination) {
      //Destructuring array of 3 values into a variable.
      const [a, b, c] = winningCombination

      //Now checking all the three inputs one-by-one, if all the three values matches in the board or (winningCombination array);then winner is declared.

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return winningCombination
      }
    }
    return null
  }

  //To stop the game once winner is declared.
  stopGame() {
    let winner = this.winningCombination()
    if (winner) {
      return true
    } else {
      return false
    }
  }
}
