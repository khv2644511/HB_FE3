let me = { age: 30 };
let you = me; //참조카운트:2

me = null; //참조카운트:1
you = null; //참조카운트:0

let x = {
  y: {
    z: 1,
  },
};

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2 라고 하겠습니다.

let a = x; //objsct1의 참조 카운트는 2
x = 1; // //objsct1의 참조 카운트는 1

let b = a.y; //objsct2의 참조 카운트는 2
a = 2; //objsct1의 참조 카운트는 2

// const aespa = ["카리나", "윈터"];
// aespa.forEach((e, i) => {
//   aespa[i] = e + "💖";
// });

// const aespa2 = aespa.map((item) => {
//   return item + "💖";
// });
// console.log(aespa);
// console.log(aespa2);

const aespa = ["카리나", "윈터", "지젤", "닝닝"];

let copy = [...aespa];
const gamja = copy.map((i) => {
  return i + "💖";
});
console.log(gamja);
