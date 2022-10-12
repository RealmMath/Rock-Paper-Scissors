let choices = ["paper", "rock", "scissors"];
let picks = document.querySelectorAll(".picks");
let picked = document.getElementById("duel");
var elementPicked = "",
  choiceIndex = "",
  score = 0;

function playGame() {
  $(".main").prepend(`<div id="countdown" class="countdown"></div>`);

  setTimeout(() => {
    picks.forEach((element, index) => {
      element.addEventListener("click", () => {
        elementPicked = element;
        choiceIndex = index;
      });
    });
  }, 3000);

  setTimeout(() => {
    if (elementPicked !== "") {
      pickedChoice(elementPicked, choiceIndex);
    } else {
      pickedNothing();
    }
    document.getElementById("countdown").remove();
  }, 4000);
}

function pickedNothing() {
  $(".first-layout").css("display", "none");
  $(".second-layout").css("display", "block");
  let computer_play = Math.floor(Math.random() * choices.length);

  computer_play = choices[computer_play];
  computer_play = document.querySelector(`.${computer_play}`);
  computer_play = computer_play.cloneNode(true);
  computer_play.classList.add("col-start-4");

  $("#duel").append(
    `<div class="w-32 picks h-32 rounded-full flex items-center justify-center cursor-pointer">
      <div class="dull rounded-full w-24 h-24 flex items-center justify-center"></div>
    </div>`
  );

  picked.appendChild(computer_play);
  $(".win-lose").text("You Lose");
}

function pickedChoice(element, index) {
  $(".first-layout").css("display", "none");
  $(".second-layout").css("display", "block");
  let computer_play = Math.floor(Math.random() * choices.length);

  let computer_choice = computer_play;
  duelChoices(index, computer_choice);

  computer_play = choices[computer_play];
  computer_play = document.querySelector(`.${computer_play}`);
  computer_play = computer_play.cloneNode(true);
  computer_play.classList.add("col-start-4");

  let choice = element.cloneNode(true);
  picked.appendChild(choice);
  picked.appendChild(computer_play);
}

function duelChoices(choice1, choice2) {
  if (choice1 === choice2) {
    $(".win-lose").text("You Tied");
  } else if (choice1 === 2 && choice2 === 0) {
    $(".win-lose").text("You Win");
    score++;
  } else if (choice1 > choice2 || (choice1 === 0 && choice2 === 2)) {
    $(".win-lose").text("You Lose");
  } else {
    $(".win-lose").text("You Win");
    score++;
  }
  $(".score").text(score);
}

$(".re-play").click(function () {
  $(".first-layout").css("display", "block");
  $(".second-layout").css("display", "none");

  picked.textContent = "";
  elementPicked = "";
  choiceIndex = "";
  playGame();
});

playGame();

//Show rules
function rules() {
  const rule = document.getElementById("rules");
  rule.classList.toggle("hidden");
}

// let socket = io();

// let firstPlayer = false;
// let roomID;
