"use strict";

let user = undefined;
let playerHealth = 40;
let grantHealth = 10;
let playerWins = 0;
let grantWins = 0;
let game = prompt("Do you want to play a game?", "yes or no");

if (game === "no") {
    console.log("Okay, maybe some other time.");
} else {
    user = prompt("Choose your username")
    while (grantWins < 1 && playerWins < 3) {
        if (playerHealth > 0 && grantHealth > 0 ) {
             playerHealth -= Math.floor(Math.random() * 2) + 1;
             grantHealth -= Math.floor(Math.random() * 2) + 1;
             console.log(`${user} was attacked. Remaining health: ${playerHealth} 
             Grant was attacked. Remaining health: ${grantHealth}`);
        } else if (grantHealth <= 0) {    
             playerWins += 1;
             console.log(`You have ${playerWins} wins.`);
             grantHealth = 10;
        } else {
             grantWins += 1;
        }
     }
     
     if (playerWins === 3) {
         console.log(`${user} wins!, GAME OVER`);
     } else {
         console.log(`Grant wins, GAME OVER`);
     }
}


