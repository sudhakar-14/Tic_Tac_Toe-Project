//welcome page
console.log("Welcome To TicTacToe Game")

const prompt=require("prompt-sync")({sigint:true});
//selecting toss
var chooseToss = null

while(chooseToss == null){
    chooseToss = prompt("Enter the Coin side Head:0 or Tail:1: ")
    if(chooseToss > 1 || chooseToss < 0 || chooseToss == null){
        console.log("You've chosen wrong")
        chooseToss = null
    }
}
var selectToss = Math.floor(Math.random()*2)

//selecting letter
var person = null
var computer = null
var chance = null
if(chooseToss == selectToss){
    console.log("You Win")
    console.log("Your Turn")
    while(person == null){
        person = prompt("what letter would you like to choose 'x' or 'o': ")
        if(person == "o" || person == "x"){
            if(person == "o"){
                computer = "x"
            } else {
                computer = "o"
            }
            break
        }
        console.log("You've chosen wrong")
        person = null
    }

} else {
    console.log("Computer Win")
    console.log("Computer Turn")
    chance = 0
    computer = Math.floor(Math.random()*2)
    if(computer == 1){
        computer = "x"
        person = "o"
    } else {
        computer = "o"
        person = "x"
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
var board = ["_","_","_","_","_","_","_","_","_"]
console.log(
    " | " + board[0] + " | " + board[1] + " | " + board[2] + " | " + "\n" + 
    " | " + board[3] + " | " + board[4] + " | " + board[5] + " | " + "\n" +
    " | " + board[6] + " | " + board[7] + " | " + board[8] + " | " 
)

var pairs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var personOcc = []
var comOcc = []


while(board.includes("_")){
    var x = prompt("Enter your area: ")
    if(chance == 0){
        board[x] = computer
        comOcc.push(x)
        chance = 1
    } else {
        board[x] = person
        personOcc.push(x)
        chance = 0
    }
    console.log(
        " | " + board[0] + " | " + board[1] + " | " + board[2] + " | " + "\n" + 
        " | " + board[3] + " | " + board[4] + " | " + board[5] + " | " + "\n" +
        " | " + board[6] + " | " + board[7] + " | " + board[8] + " | " 
    )
    console.log(personOcc,comOcc)
    for(let i of pairs){
        if(i.every(x => personOcc.includes(x))){
            console.log("You Win")
            break
        }
        if(i.every(x => comOcc.includes(x))){
            console.log("Computer Win")
            break
        }
    }
    
}
