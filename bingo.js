/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

 function checkForBingo (bingoCard, drawnNumbers) {

    bingoCards = []
    for(let i=0; i<bingoCard.length; i+=5){
        bingoCards.push(bingoCard.slice(i, i+5))
    }

    if (drawnNumbers.length == 4){
        drawnNumbers.splice(2,0,0)
    }

    for(let i=0; i < bingoCards.length; i++){
        var bingo = true;
        for(let j=0; j < bingoCards.length; j++){
            if(i == 2 && j == 2){
            }
            else if(bingoCards[i][j] !== drawnNumbers[j]){
                bingo = false
            }
        }
        if(bingo){
            return true
        }
    }

    for(let i=0; i < bingoCards.length; i++){
        var bingo = true;
        for(let j=0; j < bingoCards.length; j++){
            if(i === 2 && j === 2){
            }
            else if(bingoCards[j][i] !== drawnNumbers[j]){
                bingo = false
            }
        }
        if(bingo){
            return true
        }
    }

    bingo = true;
    for(let i=0; i<bingoCards.length; i++){
        if(i === 2){
        }
        else if (bingoCards[i][i] !== drawnNumbers[i]){
            bingo = false
        }
    }
    if(bingo){
        return true
    }

    bingo = true;
    let n = bingoCards.length-1
    for(let i=0; i<bingoCards.length; i++){
        if(i === 2){
        }
        else if (bingoCards[i][n-i] !== drawnNumbers[i]){
            bingo = false
        }
    }
    if(bingo){
        return true
    }
  
    return false;
  }
  
  module.exports = checkForBingo;
  
  // here are some samples
  
  // this should return true with diagonal + free
  let result = checkForBingo(
    [
      8, 29, 35, 54, 65,
      13, 24, 44, 48, 67,
      9, 21, 'FREE', 59, 63,
      7, 19, 34, 53, 61,
      1, 20, 33, 46, 72
    ],
    [
      8, 24, 53, 72
    ]
  );
  console.log(result);
  
  // this should return false
  result = checkForBingo(
    [
     8, 29, 35, 54, 65,
     13, 24, 44, 48, 67,
     9, 21, 'FREE', 59, 63,
     7, 19, 34, 53, 61,
     1, 20, 33, 46, 72
    ],
    [
      1, 33, 53, 65, 29, 75
    ]
  );
  console.log(result);
