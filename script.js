let userscore = 0;
let compscore = 0;

// Select all buttons correctly
const buttons = document.querySelectorAll('.choices button');

// Add event listeners
buttons.forEach(button => {
  button.addEventListener('click', () => playGame(button.id));
});

function playGame(userchoice) {
  const choice = ['rock', 'paper', 'scissors'];
  const computerchoice = choice[Math.floor(Math.random() * 3)];

  let result = "";

  if (userchoice === computerchoice) {
    result = "It's a draw!";
  } 
  else if (
    (userchoice === 'rock' && computerchoice === 'scissors') ||
    (userchoice === 'scissors' && computerchoice === 'paper') ||
    (userchoice === 'paper' && computerchoice === 'rock')
  ) {
    result = `You win! 🎉 ${userchoice} beats ${computerchoice}`;
    userscore++;
  } 
  else {
    result = `You lose 😢 ${computerchoice} beats ${userchoice}`;
    compscore++;
  }

  // Display result and score
  document.getElementById("result").innerHTML = 
    `You chose ${userchoice}. Computer chose ${computerchoice}.<br>${result}`;

  document.getElementById("userscore").textContent = userscore;
  document.getElementById("compscore").textContent = compscore;
}
