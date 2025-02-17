# Tic Tac Toe
## A Browser-based Game


### How to Play
Tic Tac Toe is a classic children's game with very basic rules.
1. The first player (chosen randomly by the comupter) chooses and clicks on a square.
2. Play passes to the other player, who chooses and clicks on a different square in the 3x3 grid.
3. If either player puts a third mark in a row, column or diagonally across the board, they win.
4. It is possible for the game to draw even, if both players manage to stop each other from getting 3 X's or O's in a row.
5. This simple game is often finished in just minutes, but my app has replayability.
>Simply click the "Reset Game" button and the board will empty, and the computer will choose a random start player.

### How it Works
-Each square of the grid listens for a player to click in it on their turn, and marks X or O based on who's turn it is.  If that square is taken, nothing happens! Each square can only take a single mark.
-The app checks which squares have been claimed, to see if anybody has a winning combination of squares
    -All on a horizontal row.
    -All on a vertical column.
    -All on either diagonal transverse through the center.
-If neither player has won or tied that turn, the computer switches players for the next turn automatically.

### How I built it
Each square of the grid is stored as a div within the board section.
```javascript
for(let i=0; i < squareEls.length; i++){
    squareEls[i].addEventListener('click', handleClick)
}
When a player clicks on a square in the grid, it fires off a function to evaluate where they clicked and mark it on the board.
```
#### How do We Know Who Wins?
 Function checkForWinner() evaluates the state of the board and determines if there are three of the same mark in a row XXX or OOO.
 Function checkForTie() looks if the entire board has been filled without a winner.