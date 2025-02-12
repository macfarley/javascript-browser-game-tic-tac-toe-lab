/*-------------------------------- Constants --------------------------------*/
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
//player X's squares
const playerX = []
const playerO = []
//player O's squares

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.

let board = ['', '', '', '', '', '', '', '', '']
let turn = 'O'
let winner = true
let tie = false


/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')




/*-------------------------------- Functions --------------------------------*/
function placePiece(index){

}

function checkForWinner(){
    if(winningCombos.includes(playerX.sort())){
        winner = true
        console.log("X wins")
    }
    if(winningCombos.includes(playerO.sort())){
        winner = true
        console.log("O wins")
    }
    else{
        winner = false
        console.log("keep playing")
    }
}

function switchPlayers(){
    if(turn == 'X'){
        turn = 'O'
    }
    if(turn == 'O'){
        turn = 'X'
    } else{
        return
    }
}

function handleClick(event){
    console.log('clicked me', event)
    // when i click, i want it to spit out which square i clicked, so i can compare it to my winning combos
    const squareIndex = event.target.id
    console.log(squareIndex)
    //check the array at the index you clicked
    if(board[squareIndex] != ''){
        return
    } else {
     board[squareIndex] = turn
     console.log(board[squareIndex])
     updateBoard()
     if(turn == 'X'){ 
        playerX.push(squareIndex)
        }else if(turn == 'O'){
        playerO.push(squareIndex)
        }
    }
    console.log(playerX, playerO)
    //then check the current player's array vs the winning combos to spit out boolean for winner
    checkForWinner()
    if(winner == false && tie == false){
        switchPlayers()
    }
    updateMessage()
}



function render(){


}
function updateBoard(){
    console.log(board)
    //go through the squares, and put a letter in each one
    board.forEach((element, index) => {
        if(element == 'X'){
        squareEls[index].innerHTML = 'X'}
        else if(element == 'O'){
            squareEls[index].innerHTML = 'O'}
        else {squareEls[index].innerHTML = ''}
    //id of the div square a player chooses
    });
    console.log(board)}
updateBoard()

function updateMessage(){
    if(winner == false && tie == false){
        messageEl.innerText = `It's ${turn}'s turn now.`
    }else if(tie == true && winner == false) {
        messageEl.innerText = `tie game.`
    } else { messageEl.innerText = ` is the winner.`}
}


function init(){



    render()
}


/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    init()
    console.log("Let's get it on!!");
  });

for(let i=0; i < squareEls.length; i++){
squareEls[i].addEventListener('click', handleClick)}
