// 1. 연습문제

// 1.1 다음 값의 평균을 구하세요.

// 1.2 다음 값의 분산를 구하세요.

// 분산 => (각 값에 - 평균) ** 2
[10, 20, 30, 10, 20, 30, 40, 10];

// - 표준편차는 루트를 씌어야 하는데 ** 0.5하면 됩니다. 아래와 같이 루트를 씌울 수 있습니다.
// Var[x]=E[𝑋2]−𝜇2
data = [10, 20, 30, 10, 20, 30, 40, 10];

const avg_data =
  data.reduce((previousValue, currentValue) => previousValue + currentValue) /
  data.length;
avg_data;
21.25;
const 제곱 = data.map((x) => x ** 2);

undefined;
const 제곱의평균 =
  제곱.reduce((previousValue, currentValue) => previousValue + currentValue) /
  제곱.length;
제곱의평균;
562.5;
const 분산 = 제곱의평균 - avg_data;
// 분산: 541.25

///////////////////////////////////////
// 2. 연습문제
// 다음 string의 평균 값을 구하세요
// hint code : '5, 4, 10, 2, 5'.split(',')
// '5, 4, 10, 2, 5'

let a = "5, 4, 10, 2, 5".split(",");
// (5) ['5', ' 4', ' 10', ' 2', ' 5']
let 정수변환 = a.map((x) => parseInt(x));
// (5) [5, 4, 10, 2, 5]
let avg_정수 = 정수변환.reduce((a, b) => a + b) / 정수변환.length;
// avg_정수: 5.2;
