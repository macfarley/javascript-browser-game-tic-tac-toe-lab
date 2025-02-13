
/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  


/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.

let board = ['1', '2', '3', '4', '5', '6', '7', '8', 'X']; 
let turn = 'X';
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.


//constant targets an array of the square divs
const squareEls = document.querySelectorAll('.sqr');
//targets a header visible to user
const messageEL = document.querySelector('#message');
//target reset button
const resetButtonEl = document.querySelector('#reset')


/*-------------------------------- Functions --------------------------------*/
//call this when it's time to update the user about game state
function render(){
    updateBoard()
    updateMessage()
}

//initializes game, runs itself on page landing
function init(){
    render()
    console.log('game loaded')
};

//where we actually store the state of the game
function updateBoard(){
    board.forEach(function(square, index){
    squareEls[index].innerHTML = square
    // console.log(`Square ${index+  1} is ${square}`)
})}

//targets the header with the state of game information to users
//4) The state of the game should be rendered to the user.
function updateMessage(){
    //check if game isnt over
    if(winner == false && tie == false){
        messageEL.innerHTML = `It's ${turn}'s turn.`
    }
    if(winner == false && tie == true){
        messageEL.innerHTML = `It's a tie game.`
    }
    if(winner == true && tie == false){
        messageEL.innerHTML = `${turn} is the winner.  Rematch?`
    }

}

// change the index of the board to the square was clicked
function placePiece(index){
    board[index] = turn
    console.log(board)
}

//compare the selections of each player, to winning combos
// function checkForWinner(){
    for(let i=0; i < winningCombos.length; i++){
      if(board[i] != ''){
        if(winningCombos[i])
      }
    }


// all the squares are full and winner is false
function checkForTie(){

}

//no winner and no tie means keep playing, make turn the opposite player
function switchPlayerTurn(){

}


//6) Handle a player clicking a square with a `handleClick` function.
function handleClick(event){
    const squareIndex = event.target.id
    //check if the game is already over.
    // if(board[squareIndex] == 'X'||'O'){
    //     return "taken"
    // }
    // if(winner == true){
    //     return "game is over"
    // }
    placePiece(squareIndex)
    // render()
//     checkForWinner()
//     console.log('winner?')
//     checkForTie()
//     console.log('tie game?')
//     switchPlayerTurn()
//     console.log('next!')
}


/*----------------------------- Event Listeners -----------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
document.addEventListener("DOMContentLoaded",init());

//when the player clicks any square, run the handleclick function when clicked
for(let i=0; i < squareEls.length; i++){
    squareEls[i].addEventListener('click', handleClick)
}

//7) Create Reset functionality.
// resetButtonEl.addEventListener('click', init());