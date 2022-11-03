/** @format */

const inputMoney = document.querySelector("#input_money");
const inputMoneyBtn = document.querySelector("#input_money_btn");
const showChange = document.querySelector("#show_change");

const original_Drink = document.querySelector(".Original");
const Violet_Drink = document.querySelector(".Violet");
const Yellow_Drink = document.querySelector(".Yellow");
const Cool_Drink = document.querySelector(".Cool");
const Green_Drink = document.querySelector(".Green");
const Orange_Drink = document.querySelector(".Orange");

const getDrinkUl = document.querySelector(".get_drink");

let drinkPrice; // change_ChangeMoney

let clicklist = []; // addSelectedDrinkList

// const drinkPriceObj = {
//   original_Drink: 1000,
//   Violet_Drink: 1000,
//   Yellow_Drink: 1000,
//   Cool_Drink: 1000,
//   Green_Drink: 1000,
//   Orange_Drink: 1000,
// };

let drinkList = [
  original_Drink,
  Violet_Drink,
  Yellow_Drink,
  Cool_Drink,
  Green_Drink,
  Orange_Drink,
];

drinkList.forEach((el) =>
  el.addEventListener("click", () => {
    change_ChangeMoney(el);
    //콜라 선택 시 획득 리스트에 넣어주는 함수
    addSelectedDrinkList(el);
  })
);

inputMoneyBtn.addEventListener("click", get_show_InputMoneyValue);

// 입금액을 잔액에 보여주는 함수
function get_show_InputMoneyValue() {
  let inputVlaue = inputMoney.value;
  console.log(typeof inputVlaue);
  if (isNaN(inputVlaue)) {
    alert("숫자를 입력하세요");
    inputMoney.value = "";
  } else {
    console.log(inputMoney.value);
    inputMoney.value = "";
    showChange.innerText = parseInt(inputVlaue);
    // toLocaleString();
  }
}

// 음료 선택 시 잔액 차감되는 함수
function change_ChangeMoney(el) {
  el.childNodes.forEach((x) => {
    if (x.className === "price") {
      drinkPrice = parseInt(x.textContent);
      let calcChange = showChange.textContent;
      if (calcChange <= 0) {
        alert("잔액이 부족합니다.");
      } else {
        calcChange -= drinkPrice;
        showChange.innerText = calcChange;
      }

      // console.log(showChange.textContent - drinkPrice);
    }
  });
}
function addSelectedDrinkList(el) {
  // console.log(el.className.split(" ")[1]);
  const drinkName = el.className.split(" ")[1];
  const li = document.createElement("li");
  li.classList.add("get_drink_list");

  if (clicklist.includes(drinkName)) {
    console.log("중복된 콜라");
    let drinkCountbuttonClassName = `.btn_get_drink_count.${drinkName}`;
    const drinkCountButton = document.querySelector(drinkCountbuttonClassName);
    let drinkCount = parseInt(drinkCountButton.textContent);
    drinkCount++;
    drinkCountButton.innerText = drinkCount;
    // 버튼 값 바꾸기
  } else {
    clicklist.push(drinkName);
    li.innerHTML = `
    <figure class="get_drink_fig"></figure>
      <img
        src="./img/${drinkName}_Cola.svg"
        alt="Elephant at sunset"
        class="get_drink_img"
      />
      <figcaption>${drinkName}_Cola</figcaption>
    </figure>
    <button class="btn_get_drink_count ${drinkName}">1</button>`;
    getDrinkUl.appendChild(li);
  }
}

// function (){

// }
