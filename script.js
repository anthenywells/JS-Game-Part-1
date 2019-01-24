"use strict";

let user = undefined;
let playerHealth = 40;
let grantHealth = 10;
let playerWins = 0;
let grantWins = 0;
let game = undefined;
let battle = undefined;




function startGame() {
    game = prompt("Do you want to play a game?", "yes or no");
    if (game === "yes") {
        user = prompt("Choose your username");
        startCombat();
    } else {
        console.log("Okay, maybe some other time.");
    }
    return "Goodbye.";
}

function startCombat() {
    while (grantWins < 1 && playerWins < 3) {
        if (playerHealth > 0 && grantHealth > 0 ) {
            battle = prompt("Would you like to attack or quit?");
            if (battle === "attack") {
               let userDamage = getDamage();
               let grantDamage = getDamage();
                playerHealth -= userDamage;
                grantHealth -= grantDamage;
                console.log(`${user} was attacked and suffered ${userDamage} damage. Remaining health: %c${playerHealth}`, "color: green"); 
                console.log(`Grant was attacked and suffered ${grantDamage} damage. Remaining health: %c${grantHealth}`, "color:red");
            } 
            else {
                return "Bye."
            }
        } 
        else if (grantHealth <= 0) {    
            playerWins += 1;
            console.log(`You have ${playerWins} wins.`);
            grantHealth = 10;
        } 
        else {
            grantWins += 1;
        } 
        if (playerWins === 3) {
            console.log(`${user} wins!, GAME OVER`);
            break;
        } else if (grantWins === 1) {
            console.log(`Grant wins, GAME OVER`);
            break;
        }
    }
}

function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
}
 