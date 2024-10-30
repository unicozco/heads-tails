// let btns = document.querySelectorAll('button');
// let scoreArea = document.querySelector('.scoreArea');

// for(let t of btns){
//     t.addEventListener("click", function(){toss(t)})
// }

// let userScore = 0
// let computerScore =0

// function toss(clickedButtons){
//     let choices = ["Head", "Tail"]
//     let randomIndex= parseInt(Math.random()*choices.length);
//     let computerScore= choices[randomIndex];
//     if(userChoice == computerChoice){
//         userScore++;
//     }
//     else{
//         computerScore++
//     }
// }

// scoreArea.innerHTML = `<h3>User: ${userScore}</h3><h3>Computer: ${computerScore}</h3>`;



let btns = document.querySelectorAll('button');
let scoreArea = document.querySelector('.scoreArea');

let userScore = 0;
let computerScore = 0;

for (let t of btns) {
    t.addEventListener("click", function() {
        toss(t.innerText);
    });
}

function toss(userChoice) {
    let choices = ["Head", "Tail"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    
    if (userChoice === computerChoice) {
        userScore++;
    } else {
        computerScore++;
    }

    scoreArea.innerHTML = `<h3>User: ${userScore}</h3><h3>Computer: ${computerScore}</h3>`;
}
