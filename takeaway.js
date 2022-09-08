// Takeaway
// Difficulty
// Harder

// Concepts
// Game Theory


// There’s a game, “takeaway”, that is played by two players, using a number of stones.

// The first player goes first. She can take 2, 3, or 5 stones from the pool. The second player goes next; she can also remove 2, 3, or 5 stones. The first player then goes, and so on.

// If a player is unable to move (there are fewer than 2 stones), they lose.

// Your Challenge
// Imagine that both players have “perfect play” — that is, they always make the best possible move. Then, you can absolutely determine who would win a game with n stones.

// For example:

// 1
// Player #1 cannot move, so player #2 win

// 2
// Player #1 takes 2 stones, and player #2 cannot move

// 3
// Player #1 takes either 2 or 3 stones; either way, player #2 cannot move

// 4
// Player #1 has two choices, one of which wins:

// she takes 2 stones, leaving 2 (a win for player #2)

// she takes 3 stones, leaving 1 (a win for player #1)

// 5
// Player #1 has three choices, one of which wins:

// she takes 2 stones, leaving 3 (a win for player #2)

// she takes 3 stones, leaving 2 (a win for player #2)

// she takes 5 stones, leaving 0 (a win for player #1)

// 6
// Player #1 has three choices, one of which wins;

// she takes 2 stones, leaving 4 (a win for player #2)

// she takes 3 stones, leaving 3 (a win for player #2)

// she takes 5 stones, leaving 1 (a win for player #1)

// 7
// Player #1 has three choices, but none will win:

// she takes 2 stones, leaving 5 (a win for player #2)

// she takes 3 stones, leaving 4 (a win for player #2)

// she takes 5 stones, leaving 2 (a win for player #2)

// 8
// Player #1 has three choices, but none will win:

// she takes 2 stones, leaving 6 (a win for player #2)

// she takes 3 stones, leaving 5 (a win for player #2)

// she takes 5 stones, leaving 3 (a win for player #2)

// 9
// Player #1 has three choices, with one being a win:

// she takes 2 stones, leaving 7 (a win for player #1)

// she takes 3 stones, leaving 6 (a win for player #2)

// she takes 5 stones, leaving 4 (a win for player #2)

// 10
// Player #1 has three choices, with two being wins:

// she takes 2 stones, leaving 8 (a win for player #1)

// she takes 3 stones, leaving 7 (a win for player #1)

// she takes 5 stones, leaving 5 (a win for player #2)

// Remember: both players make the best possible moves, so if player #1 has a winning strategy, she will use it (and player #2 will defend as well as possible).

// Code
// We’ve written a function which takes one parameter, n, the number of stones in the game. It should return true if the active play could win a game starting with that number of stones and false if not. (Hint: Use recursion)



// If 1 stone - false
// if 2-6 stones - true
// if 7-8 stones -false
// if 9-10 true

// function takes in num and win status (default to true)
// if num is 1
// return win status flipped
//if num above 6
// call function again w/ num -2, win status flipped

function didIdoIt(num, winStatus = true){
    if(num === 1){
        return !winStatus
    }
    else if (num >=2 && num <=6){
        return winStatus
    }
    else{
        return didIdoIt (num -2, !winStatus)
    }
}
console.log(didIdoIt(1,winStatus = true))
console.log(didIdoIt(2,winStatus = true))
console.log(didIdoIt(3,winStatus = true))
console.log(didIdoIt(4,winStatus = true))
console.log(didIdoIt(5,winStatus = true))
console.log(didIdoIt(6,winStatus = true))
console.log(didIdoIt(7,winStatus = true))
console.log(didIdoIt(8,winStatus = true))
console.log(didIdoIt(9,winStatus = true))
console.log(didIdoIt(10,winStatus = true))
