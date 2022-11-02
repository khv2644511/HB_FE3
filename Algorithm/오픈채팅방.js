/** @format */

result = [
  "Prodo님이 들어왔습니다.",
  "Ryan님이 들어왔습니다.",
  "Prodo님이 나갔습니다.",
  "Prodo님이 들어왔습니다.",
];

let test = [
  "A 10 !", //
  "B 20 !", //
  "A 22", //
  "B 20 @", //
  "A 21 @", //
];

// - 풀이를 위한 기본 문법
test.forEach((s) => {
  console.log(s);
  const [a, b, c] = s.split(" ");
  console.log(a, b, c);
  //   console.log(s.split(" "));
  console.log("--------");
});

// - step 별 풀이

// {
//     '아이디': '닉네임',
//     '아이디': '닉네임',

// }
// ["Prodo님이 들어왔습니다.","Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  let answer = [];
  let 유저정보 = {};
  for (const i of record) {
    const [상태, 아이디, 닉네임] = i.split(" ");
    answer.push([상태, 아이디, 닉네임]);
    if (상태 === "Enter") {
      유저정보[아이디] = 닉네임;
      answer.push([아이디, "님이 들어왔습니다."]);
    } else if (상태 === "Leave") {
      answer.push([아이디, "님이 나갔습니다."]);
    } else if (상태 === "Change") {
      유저정보[아이디] = 닉네임;
    }
  }
  //   console.log(유저정보);
  answer = answer.map((item) => item[0] + item[1]);
  return answer;
}

solution(record);

//호준님
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  let answer = [];
  let 유저정보 = {};
  for (const i of record) {
    const [상태, 아이디, 닉네임] = i.split(" ");
    // answer.push([상태, 아이디, 닉네임])
    if (상태 === "Enter") {
      유저정보[아이디] = 닉네임;
      answer.push([아이디, "님이 들어왔습니다."]);
    } else if (상태 === "Leave") {
      answer.push([아이디, "님이 나갔습니다."]);
    } else if (상태 === "Change") {
      유저정보[아이디] = 닉네임;
    }
  }
  //console.log(유저정보)
  answer = answer.map((item) => 유저정보[item[0]] + item[1]);
  return answer;
}

solution(record);
