import words from "./words.js";
const SAMPLE_WORD_NUM = 20; // 샘플단어 갯수

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function generateRandomNickname(nickLenth, genType) {
  const result = document.querySelector("#result");
  let wordStr = "";
  let letterStr = "";

  for (let i = 0; i < SAMPLE_WORD_NUM; i++) {
    let randomWordIdx = getRandomInt(0, words.length);
    wordStr = wordStr + words[randomWordIdx].replace(/[0-9]/g, ""); // 숫자제거
  }

  switch (genType) {
    case "A": // 완전랜덤
      for (let i = 0; i < nickLenth; i++) {
        let randomLetter = wordStr.charAt(getRandomInt(0, wordStr.length));
        letterStr = letterStr + randomLetter;
      }
      break;
    case "B": // 부분단어
      let indexStart = getRandomInt(0, SAMPLE_WORD_NUM / 2);
      let indexEnd = indexStart + Number(nickLenth);
      letterStr = wordStr.substring(indexStart, indexEnd);
      break;
    default:
    //
  }

  result.innerHTML = letterStr;
}

function init() {
  const nickLengthSelect = document.querySelector("#nicklength-select");
  const genTypeSelect = document.querySelector("#gentype-select");
  const btnChoice = document.querySelector("#btn-choice");

  let nickLength = 6; // 닉네임 길이
  let genType = "A"; // 생성방식

  nickLengthSelect.addEventListener("change", function () {
    var option = nickLengthSelect.options[nickLengthSelect.selectedIndex];
    nickLength = option.value;
  });

  genTypeSelect.addEventListener("change", function () {
    var option = genTypeSelect.options[genTypeSelect.selectedIndex];
    genType = option.value;
  });

  btnChoice.addEventListener("click", function () {
    generateRandomNickname(nickLength, genType);
  });
}

init();
