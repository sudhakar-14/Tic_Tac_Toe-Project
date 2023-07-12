//welcome page
console.log("Welcome To TicTacToe Game")

const prompt=require("prompt-sync")({sigint:true});
//selecting toss
var chooseToss = null

while(chooseToss == null){
    chooseToss = prompt("Enter the Coin side Head:1 or Tail:0: ")
    if(chooseToss > 1 || chooseToss < 0 || chooseToss == null){
        console.log("You've chosen wrong")
        chooseToss = null
    }
}
var selectToss = Math.floor(Math.random()*2)

//selecting letter
var person = null
var computer = null
if(chooseToss == selectToss){
    console.log("You Win")
    console.log("Your Turn")
    while(person == null){
        person = prompt("what letter would you like to choose 'x' or 'o': ")
        if(person == "o" || person == "x"){
            break
        }
        console.log("You've chosen wrong")
        person = null
    }

} else {
    console.log("Computer Win")
    console.log("Computer Turn")
    computer = Math.floor(Math.random()*2)
    if(computer == 1){
        computer = "x"
    } else {
        computer = "o"
    }
}

if(person == "x" || computer == "o"){
    console.log("Your letter is X")
    console.log("computer letter is O")
} else {
    console.log("Your letter is O")
    console.log("computer letter is X")
}

//tictactoe board
var board = [" "," "," "," "," "," "," "," "," "]
console.log(
    board[0] + " | " + board[1] + " | " + board[2] + " | " + "\n" + 
    board[3] + " | " + board[4] + " | " + board[5] + " | " + "\n" +
    board[6] + " | " + board[7] + " | " + board[8] + " | " 
)
