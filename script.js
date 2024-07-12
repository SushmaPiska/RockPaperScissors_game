let main = document.getElementById("mainPage");
let resultPage = document.getElementById("page-2");
let icon = document.getElementsByClassName("icon");

let urImage = document.getElementById("urImage");
let pcImage = document.getElementById("pcImage");

let uPick = document.getElementById("uPick");
let pcPick = document.getElementById("pcPick");

let state1 = document.getElementById("state1");
let state2 = document.getElementById("state2");
let playButton = document.getElementById("playButton");

let rulesBtn = document.getElementById("rulesBtn");
let nextBtn = document.getElementById("nextBtn");

let rulesPop = document.getElementById("rulesPop");
let crossbtn = document.getElementById("cross");

let urScore=document.getElementById("urScore")
let comScore=document.getElementById("comScore")


//////yourScore/////////////////////////////////


// localStorage.setItem("yourScore",urScore.innerHTML )
// localStorage.setItem("computerScore",comScore.innerHTML) 





///////////////////////

//computerScore/////////////////


rulesBtn.addEventListener("click", () => {
  rulesPop.classList.remove("hidden");
});

crossbtn.addEventListener("click", () => {
  rulesPop.classList.add("hidden");
});

////random..../////

function compChoice() {
  let randomNum = Math.random();
  if (randomNum < 0.3) {
    return "rock";
  }
  if (randomNum > 0.6) {
    return "paper";
  }
  return "scissors";
}

function gameResult(urChoice, comChoice) {
  if (
    (urChoice === "rock" && comChoice === "scissors") ||
    (urChoice === "paper" && comChoice === "rock") ||
    (urChoice === "scissors" && comChoice === "paper")
  ) {
    return 1;
  }
  if (urChoice === comChoice) {
    return 0;
  }
  return -1;
}

function imgSource(idd) {
  if (idd == "rock") {
    return "icons/fist.png";
  }
  if (idd == "paper") {
    return "icons/hand.png";
  }
  return "icons/scissor.png";
}


let urPrevScore=JSON.parse(localStorage.getItem("yourScore"))?parseInt(JSON.parse(localStorage.getItem("yourScore"))):0
urScore.innerHTML=urPrevScore

let comPrevScore=JSON.parse(localStorage.getItem("computerScore"))?parseInt(JSON.parse(localStorage.getItem("computerScore"))):0
comScore.innerHTML=comPrevScore

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("clickMe")) {
    let urChoice = e.target.id;
    let comChoice = compChoice();
    let result = gameResult(urChoice, comChoice);

    main.classList.add("hidden");
    resultPage.classList.remove("hidden");

    urImage.src = imgSource(urChoice);
    uPick.setAttribute("id", urChoice);

    if (result == 1) {
      state1.innerHTML = "YOU WIN";
      uPick.classList.add("circle")

      urPrevScore=JSON.parse(localStorage.getItem("yourScore"))
      localStorage.setItem("yourScore",urPrevScore+1)
      urScore.innerHTML=urPrevScore+1;


    } else if (result == -1) {
      state1.innerHTML = "YOU LOST";
      pcPick.classList.add("circle")

      comPrevScore=JSON.parse(localStorage.getItem("computerScore"))
      localStorage.setItem("computerScore",comPrevScore+1)
      comScore.innerHTML=comPrevScore+1

    } else {
      state1.innerHTML = "TIE UP";
      state2.classList.add("hidden");
    }

    pcImage.src = imgSource(comChoice);
    pcPick.setAttribute("id", comChoice);

    if (result == -1) {
      playButton.innerHTML = "REPLAY";
    } else {
      playButton.innerHTML = "PLAY AGAIN";
    }

    if (result == 1) {
      rulesBtn.classList.remove("pos1");
      rulesBtn.classList.add("pos2");
      nextBtn.classList.remove("hidden");
    }

    playButton.addEventListener("click", () => {
      if (result == 1) {
        rulesBtn.classList.add("pos1");
        rulesBtn.classList.remove("pos2");
        nextBtn.classList.add("hidden");
        uPick.classList.remove("circle")
      }
      resultPage.classList.add("hidden");
      main.classList.remove("hidden");
      state2.classList.remove("hidden");
      pcPick.classList.remove("circle")
    });

    // alert(urChoice + " " + comChoice + " " + result);
  }
});

///////////////////////next///////////////////////
const extra = document.getElementById("extra");
const extra2 = document.getElementById("extra2");
nextBtn.addEventListener("click", () => {
  rulesBtn.classList.add("pos1");
  rulesBtn.classList.remove("pos2");
  nextBtn.classList.add("hidden");
  extra.classList.add("hidden");
  extra2.classList.remove("hidden");
});
let playButton2 = document.getElementById("playButton-2");

playButton2.addEventListener("click", () => {
  extra2.classList.add("hidden");
  extra.classList.remove("hidden");
  // state2.classList.remove("hidden");

  resultPage.classList.add("hidden");
  main.classList.remove("hidden");
  state2.classList.remove("hidden");

  console.log("play clicked");
});

////rules///////////////////////////////////////////


//////////////////////////////////////
