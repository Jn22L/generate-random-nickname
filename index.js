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
    case "1": // 완전랜덤
      for (let i = 0; i < nickLenth; i++) {
        let randomLetter = wordStr.charAt(getRandomInt(0, wordStr.length));
        letterStr = letterStr + randomLetter;
      }
      break;
    case "2": // 부분단어
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
  const numberSelect = document.querySelector("#number-select");
  const gentypeSelect = document.querySelector("#gentype-select");
  const btnChoice = document.querySelector("#btn-choice");

  let nickLength = 6; // 닉네임 길이
  let genType = "1"; // 생성방식

  numberSelect.addEventListener("change", function () {
    var option = numberSelect.options[numberSelect.selectedIndex];
    nickLength = option.value;
  });

  gentypeSelect.addEventListener("change", function () {
    var option = gentypeSelect.options[gentypeSelect.selectedIndex];
    genType = option.value;
  });

  btnChoice.addEventListener("click", function () {
    generateRandomNickname(nickLength, genType);
  });
}

init();
