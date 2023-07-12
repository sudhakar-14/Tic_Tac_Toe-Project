console.log("Welcome To TicTacToe Game")


const prompt=require("prompt-sync")({sigint:true});
var head = 0; tail = 1
var chooseToss = null

while(chooseToss == null){
    chooseToss = prompt("Enter the Coin side Head or Tail: ")
    if(chooseToss > 1 || chooseToss < 0 || chooseToss == null){
        console.log("You've chosen wrong")
        chooseToss = null
    }

}
var selectToss = Math.floor(Math.random()*2)

if(chooseToss == selectToss){
    console.log("Person Win")
    console.log("Your Turn")

} else {
    console.log("Computer Win")
    console.log("Computer Turn")
}

