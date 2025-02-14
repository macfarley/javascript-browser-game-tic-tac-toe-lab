
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
    if(tie == false && winner == true){
        messageEL.innerHTML = `${turn} is the winner.  Rematch?`
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
    render()
    console.log('game loaded')
};



// change the index of the board to the square was clicked
function placePiece(index){
    board[index] = turn
    // console.log(board)
}

//compare the selections of each player, to winning combos
function checkForWinner(){
    //go to each combo
    for(let i = 0; i < winningCombos.length; i++){
        // //then for each index of that combo, see if the value of the board at that index is the current turn player, 
        // // only the current player can win
        // for(let j = 0; j < winningCombos[i].length; j++){
        //     if(board[j] == turn){
        //         //all three of a winning combo's squares are the same turn, that one wins
        //         if(board[winningCombos[i][0]] == turn && board[winningCombos[i][1]] == turn && board[winningCombos[i][2]] == turn){
        //             winner = true
        //             console.log(`winner is ${turn}`)
        //         }
        //     }
        // }
    //find the value of winning combos 0index
    //exclude the empty strings
        if(board[winningCombos[i][0]] != ""){
             //if the vlue of these squares isn't the same, they're not owned by the same player
            if(board[winningCombos[i][0]] == board[winningCombos[i][1]]){
                if(board[winningCombos[i][0]] == board[winningCombos[i][2]]){
                    winner = true
                    // console.log("winner!")
                }
                else return
            } 
            else return       
        } 
    }
}

// all the squares are full and winner is false
function checkForTie(){
    //if there's a winner there's no tie
    if(winner = true){
        return
    }
    //if there's unused spots it can't be a tie yet
    if(board.indexOf('') < 0){
        tie = true    
    }
    console.log('tie game losers')
}

//no winner and no tie means keep playing, make turn the opposite player
function switchPlayerTurn(){
    if(winner != true){
        if(turn == 'X'){
            turn = 'O'
        }
        if(turn == 'O'){
            turn = 'X'
        }
        console.log(turn)
    }
    return
}


//6) Handle a player clicking a square with a `handleClick` function.
function handleClick(event){
    const squareIndex = event.target.id
    // // check if the game is already over.
    // if(board[squareIndex] == 'X'||'O'){
    //     return "taken"
    // }
    // if(winner == true){
    //     return "game is over"
    // }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()

//     console.log('next!')
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