/** @format */
// 닌자코드의 길
// 왜 안되는지 찾아보겠습니다.
// const q = document.querySelector;

// section
const loadingSection = document.querySelector(".cont-result-loading");
const resultSection = document.querySelector(".cont-result");
const modalSection = document.querySelector("#modal");

// button
const startButton = document.querySelector(".btn-exc");
const openButton = document.querySelector(".btn-go");
const closeButton = document.querySelector(".btn-close");
const shareButton = document.querySelector(".btn-share");

function calculate() {
  const fieldValue = document.querySelector("#inp-field");
  const timeValue = document.querySelector("#inp-time");
  // console.log(fieldValue, timeValue)
  // console.log(fieldValue.value, timeValue.value)
  console.log(typeof timeValue.value);

  // 사용자가 개발자도구에 required 삭제할 수도 있어서
  if (fieldValue.value === "") {
    alert("비정상 접근입니다.");
    return;
  } else if (timeValue.value === "") {
    alert("비정상 접근입니다.");
    return;
    //'25'>24 => true
  } else if (timeValue.value >= 24) {
    alert("하루는 24시간입니다.");
    return;
  } else if (timeValue.value >= 12) {
    alert("우리의 육체는 로봇이 아닙니다.");
    return;
  }

  // .cont-result-loading가 먼저 보이고 result 가 보여야합니다.

  loadingSection.style.display = "block";

  setTimeout(function () {
    const fieldResult = document.querySelector(".field-result");
    const timeResult = document.querySelector(".time-result");

    loadingSection.style.display = "none";
    resultSection.style.display = "block";

    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = 10000 / parseInt(timeValue.value);
  }, 1500);
}

function openModal() {
  // console.log('2')
  modalSection.style.display = "block";
}

function closeModal() {
  // console.log('3')
  modalSection.style.display = "none";
}

function copyUrl() {
  // console.log('4')
  // url copy하는 방법 3가지
  // 1번째: 구버전(이제는 잘 사용하지 않습니다. 어떤 브라우저에서도 잘 동작되기 때문에 잘 사용됨,,)
  // 2번째: 신버전(safari 13.1 버전부터 https 환경에서만 작동하는 코드)
  // 3번째: clipboard.js 라이브러리 사용하는 방법

  //   let url = window.location.href;
  //   console.log(url);

  //   // 1번
  //   let temp = document.createElement("input");
  //   temp.value = url;
  //   document.body.appendChild(temp);
  //   temp.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(temp);
  //   alert("URL이 복사되었습니다.");

  // 2번
  let url = window.location.href;
  //   Navigator 인터페이스는 사용자 에이전트의 상태와 신원 정보를 나타내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.
  //   Navigator 객체는 window.navigator 읽기 전용 속성으로 접근할 수 있습니다.
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("URL이 복사되었습니다.");
      console.log(navigator);
    })
    .catch((err) => {
      alert("URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.");
      console.log(err);
    });
}

startButton.addEventListener("click", calculate);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
shareButton.addEventListener("click", copyUrl);

window.onclick = function (event) {
  if (event.target == modalSection) {
    closeModal();
  }
};
