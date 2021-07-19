import Games from './Games.js'
import GamesView from './GamesView.js'

let games = new Games()
let gamesView = new GamesView()

document.querySelector('.restart').addEventListener('click', () => {
  //console.log('start new game clicked')
  startGame()
})

let tiles = document.querySelectorAll('.board-tile')
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    //console.log(tile.dataset.index)
    onClick(tile.dataset.index)
  })
})

function onClick(i) {
  games.makeMove(i)
  gamesView.updateBoard(games)
}

//functionality for 'Start new game' button

function startGame() {
  console.log('Game started')
  //obj of Games class & emptying all inputs of board
  games = new Games()
  gamesView.updateBoard(games)
}

//Initially on the starting of the game setting current player's turn
gamesView.updateBoard(games)
