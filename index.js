import words from "./words.js";
let MAX_LENGTH = 6;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function generateRandomNickname(maxLenth) {
  const result = document.querySelector("#result");
  let wordStr = "";
  let letterStr = "";

  for (let i = 0; i < 10; i++) {
    let randomWordIdx = getRandomInt(0, words.length);
    wordStr = wordStr + words[randomWordIdx].replace(/[0-9]/g, ""); // 숫자제거
  }

  for (let i = 0; i < maxLenth; i++) {
    let randomLetter = wordStr.charAt(getRandomInt(0, wordStr.length));
    letterStr = letterStr + randomLetter;
  }

  result.innerHTML = letterStr;
}

function init() {
  const numberSelect = document.querySelector("#number-select");
  const btnChoice = document.querySelector("#btn-choice");

  numberSelect.addEventListener("change", function () {
    var option = numberSelect.options[numberSelect.selectedIndex];
    MAX_LENGTH = option.value;
  });

  btnChoice.addEventListener("click", function () {
    generateRandomNickname(MAX_LENGTH);
  });
}

init();
