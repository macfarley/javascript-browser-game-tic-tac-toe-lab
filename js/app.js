
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
let board = ['', '', '', '', '', '', '', '', '']; 
let turn = 'X'
let winner = false
let tie = false
/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.
//constant targets an array of the square divs
const squareEls = document.querySelectorAll('.sqr');
//targets a header visible to user
const messageEL = document.querySelector('#message');
//target reset button
const resetButtonEl = document.querySelector('#reset')
//a header with the current turn display
const currentTurnEl = document.querySelector('#turnCounter')


/*-------------------------------- Functions --------------------------------*/
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
    if(winner == false && tie == true){
        messageEL.innerHTML = `It's a draw.`
        }else if(tie == false && winner == true){
        messageEL.innerHTML = `${turn} is the winner.`
        }else{
             messageEL.innerHTML = `Keep playing.`
        }
}

//call this when it's time to update the user about game state
function render(){
    updateBoard()
    updateMessage()
    // console.log(winner, tie, board)
}

//initializes game, runs itself on page landing
function init(){
    winner = false;
    tie = false;
    for(let i = 0; i < board.length; i++){
        board[i] = ''
    }
    updateBoard()
    const firstPlayer = () => {
        let players = ['X', 'O']
        const randomIndex = Math.floor(Math.random() * 2);
        turn = players[randomIndex];
    };
    firstPlayer()
    messageEL.innerHTML = `New Game.`
    currentTurnEl.innerHTML = `It's ${turn}'s turn.`
    console.log('game loaded')
};

// change the index of the board to the square was clicked
function placePiece(index){
    board[index] = turn
    // console.log(board)
}

//compare the selections of each player, to winning combos
function checkForWinner(){
    // console.log(turn, board)
    //go to each combo
    for(let i = 0; i < winningCombos.length; i++){
    //find the value of winning combos 0index
    //exclude the empty strings
        if(board[winningCombos[i][0]] == ""){
            continue}
        //if the vlue of these squares isn't the same, they're not owned by the same player
        if(board[winningCombos[i][0]] == board[winningCombos[i][1]] && board[winningCombos[i][1]] != ''){
                if(board[winningCombos[i][0]] == board[winningCombos[i][2]]){
                    console.log("winner!")
                    winner = true
                    return
                }
                else continue
            } 
        else continue       
        }
    //if it makes through the whole loop with no trigger
    console.log("no winning combo")
    }

// all the squares are full and winner is false
function checkForTie(){
    //if there's a winner there's no tie
    if(winner == true){
        return
    }else{
    //if there's unused spots it can't be a tie yet
    if(board.indexOf('') < 0){
        tie = true    
    }}
    // console.log('tie game losers')
}

//no winner and no tie means keep playing, make turn the opposite player
function switchPlayerTurn() {
    if(winner == true||tie == true){
        currentTurnEl.innerHTML = `Rematch?`
        return
    }else{
    if(turn == 'X'){
        turn = 'O'
    }else{
    if(turn == 'O'){
        turn = 'X'
    }}
    currentTurnEl.innerHTML = `It's ${turn}'s turn.`
    }
    // console.log(turn)
  };


//6) Handle a player clicking a square with a `handleClick` function.
function handleClick(event){
    const squareIndex = event.target.id
    // check if the game is already over.
    if(winner === true){
        console.log("the game is over")
        return}
    if(board[squareIndex] == 'X' || board[squareIndex] == 'O'){
        console.log("Square taken.")
        return
    }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    render()
    switchPlayerTurn()
}


/*----------------------------- Event Listeners -----------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
document.addEventListener("DOMContentLoaded",init);

//when the player clicks any square, run the handleclick function when clicked
for(let i=0; i < squareEls.length; i++){
    squareEls[i].addEventListener('click', handleClick)
}

//7) Create Reset functionality.
resetButtonEl.addEventListener('click', init);