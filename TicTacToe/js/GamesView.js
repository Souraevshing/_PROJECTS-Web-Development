/**
 * Used to update player's turn in the index.html
 */

export default class GamesView {
  updateBoard(games) {
    //console.log(games.board)
    this.updateTurn(games)

    //Declaring winner of the match here

    const winningCombination = games.winningCombination()

    for (let i = 0; i < games.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`)
      tile.classList.remove('winner')
      //tile.textContent = games.board[i]

      //Giving individual styling to both player by selecting current player
      //IF games board is empty or (null), just fill the board with empty string
      let playerType = games.board[i] == 'X' ? 'tile-x' : 'tile-o'
      tile.innerHTML = `<span class='${playerType}'>${
        games.board[i] ? games.board[i] : ''
      }</span>`

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add('winner')
      }
    }
  }

  //Checking the current turn of player and changing color of players accordingly

  updateTurn(games) {
    let playerX = document.querySelector('.player-x')
    let playerO = document.querySelector('.player-o')

    //console.log(player_X)
    //console.log(player_O)
    if (games.turn == 'X') {
      playerX.classList.add('active')
      playerO.classList.remove('active')
    } else {
      playerO.classList.add('active')
      playerX.classList.remove('active')
    }
  }
}
