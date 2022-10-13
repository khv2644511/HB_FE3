// 1. 연습문제

// // 1.1 다음 값의 평균을 구하세요.
// data = [10, 20, 30, 10, 20, 30, 40, 10];

// const avg_data =
//   data.reduce((previousValue, currentValue) => previousValue + currentValue) /
//   data.length;
// // avg_data;
// // 21.25;

// // 1.2 다음 값의 분산를 구하세요.

// // 분산 => (각 값에 - 평균) ** 2
// // - 표준편차는 루트를 씌어야 하는데 ** 0.5하면 됩니다. 아래와 같이 루트를 씌울 수 있습니다.
// // Var[x]=E[𝑋2]−𝜇2

// const 제곱 = data.map((x) => x ** 2);
// const 제곱의평균 =
//   제곱.reduce((previousValue, currentValue) => previousValue + currentValue) /
//   제곱.length;
// 제곱의평균;
// 562.5;
// const 분산 = 제곱의평균 - avg_data;
// console.log(분산);

// const 평균의 제곱 = Math.pow(data.reduce((previousValue, currentValue) => previousValue + currentValue) /
// data.length,2);
// 562.5 - (21.25)^2 (451.5625)
// 110.9375

// ///////////////////////////////////////
// // 2. 연습문제
// // 다음 string의 평균 값을 구하세요
// // hint code : '5, 4, 10, 2, 5'.split(',')
// // '5, 4, 10, 2, 5'

// let a = "5, 4, 10, 2, 5".split(",");
// // (5) ['5', ' 4', ' 10', ' 2', ' 5']
// let 정수변환 = a.map((x) => parseInt(x));
// // (5) [5, 4, 10, 2, 5]
// let avg_정수 = 정수변환.reduce((a, b) => a + b) / 정수변환.length;
// // avg_정수: 5.2;

// ////////////////////////////////////
// // ## 3. 연습문제

// // 다음 array의 각 자리수의 합을 구하세요.
// // hint 문자열로 변환해서 풀어주세요!
// arr = [11, 22, 33, 111, 2];
// // 1+1, 2+2, 3+3, 1+1+1, 2
// // 2, 4, 6, 3, 2
// // 정답 : 17

// let a = [11, 22, 33, 111, 2];
// let s = [11, 22, 33, 111, 2].join("");
// console.log(s);
// let sum = 0;
// for (var variable in s) {
//   console.log(parseInt(s[variable], 10));
//   sum += parseInt(s[variable], 10);
// }
// console.log(sum);

// 반복문만 사용하여 숫자단위 콤마 찍기
let s = 100000000;
let s2 = s.toString();
for (let i = s2.length - 3; i > 0; i -= 3) {
  s2 = s2.slice(0, i) + "," + s2.slice(i);
}
console.log(s2);

// 콤마 없애기
s2 = "100,000,000";
let s = s2.join(",");
s.join("");

//문자열 뒤집기
let s = "hello";

for (let i = 0; i < s.length; i++) {
  str = s[i] + str;
}
