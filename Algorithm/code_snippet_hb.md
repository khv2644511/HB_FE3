<!-- @format -->

# 1. 자료구조와 알고리즘, 코딩테스트

- 추천 서적
  - 학문적 접근 : The Art of Computer Programming(도널드 커누스)
  - 코딩테스트 접근 : 파이썬 알고리즘 인터뷰(박상길)
  - 기타 : 파이썬 자료구조와 알고리즘(중학교 학생 가르칠 때 사용), 그림으로 배우는 알고리즘(코드 없고 그림만 있습니다), 알고리즘 산책(역사적인 알고리즘을 쭉 훑어봅니다. 수학적인 내용이 많고 코드는 C++로 되어 있으나 보는데 큰 무리는 없습니다.)

## 1.1 코테 전 준비사항

1. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
   - 프로그래머스 Node Version(12) -> replaceAll(15)
   - 사용 가능 라이브러리 미리 확인 등
   - 대부분 numpy나 pandas 같은 라이브러리 사용 금지이지만 간혹가다 제한이 없는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, itertools, re, bisect 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
5. 기억해두자! 예외처리!
6. 속도개선
   1. class로 구현
   2. 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
   3. for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
   4. 재귀는 느립니다. 최후의 수단으로 사용하세요.

## 1.2 문제 유형과 출제 방식

- 5 ~ 6시간, 6 ~ 7문제
- 30분씩 4문제, 2시간씩 2문제
- 문제 유형 분석 관련 글
  - [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
  - [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
  - [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
    - 요구사항 구현 알고리즘(33%)
    - 그리디 알고리즘(20%)
    - 너비우선탐색, 깊이우선탐색(20%)
    - 정렬(8%)
    - 다이나믹 프로그래밍, 최단경로, 이진 탐색 등
- 전체 문제 유형
  - 알고리즘
    - 정렬
    - 이진 검색
    - 비트 연산
    - 슬라이딩 윈도우, 페이지 교체, 투포인트
    - 분할 정복
      - 그리디 알고리즘
      - 다이나믹 프로그래밍
      - 퀵소트, 병합정렬
  - 자료구조
    - 선형
      - 스택과 큐, 데크
      - 연결리스트, 해시 테이블
    - 비선형
      - 그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
      - 트리
        - 힙
        - 트라이

## 1.3 워밍업 문제

- 활용할 수 있는 기본 개념 코드

```js
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

Infinity - Infinity(123.45).toFixed(); // 123
(123.45).toFixed(1); // 123.4

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((a, c) => (a += c));

// 평평하게 만들기 - flat()
[1, [2, [3, [4]]]].flat(); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity);

// 배열 만들기
Array(10).fill(0);
[...Array(10)].map((_, i) => i + 1);
".".repeat(10).split("."); // 권장하지 않습니다.
".".repeat(9).split(".");
Array.from("ab".repeat(10));
```

- 활용할 수 있는 커스텀 메서드

```js
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
// zip('hello', [10, 20, 30, 40, 50]) // error
zip([10, 20, 30, 40, 50], "hello"); // 성공
// (2) [10, 'h']
// (2) [20, 'e']
// (2) [30, 'l']
// (2) [40, 'l']
// (2) [50, 'o']
```

### 1.3.1 워밍업 문제(google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

문제 링크 : https://codingdojang.com/scode/393

- 풀이

  ```js
  // '123433332121'.match(/1/g)
  // (3) ['1', '1', '1']
  // 'hello world hello'.match(/hello/g)
  // (2) ['hello', 'hello']

  let str = "";

  for (let i = 1; i <= 10000; i++) {
      str += i;
  }

  console.log(str.match(/8/g).length);

  // '123433332121'.split("")
  // (12) ['1', '2', '3', '4', '3', '3', '3', '3', '2', '1', '2', '1']
  // ['1', '2', '3', '4', '3', '3', '3', '3', '2', '1', '2', '1'].filter(item => item === "1")
  // (3) ['1', '1', '1']
  // ['1', '1', '1'].length
  let str = "";
  for (let i = 1; i <= 10000; i++) {
      str += i;
  }
  console.log(str.split("").filter((item) => item === "8").length);

  // Array(10)
  // (10) [empty × 10]
  // let test = Array(10)
  // undefined
  // test[2] = null
  // null
  // test[3] = undefined
  // undefined
  // test
  // (10) [empty × 2, null, undefined, empty × 6]

  // for (i of test){
  //     console.log(i)
  // }

  // Array(10).fill(0)
  // (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  // Array(10).fill(1).map((v, i) => v + i)
  // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Array(10).fill(0).map((v, i) => v + i)
  // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Array(10).fill(1).map((_, i) => i + 1)
  // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Array(10).map((_, i) => i + 1)
  // (10) [empty × 10]

  // [...Array(10)].map((_, i) => i + 1)
  // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  Array(10000)
      .fill(0)
      .map((n, index) => n + index)
      .join("")
      .match(/8/g).length;

  // Array(10).fill(1).map((_, i) => i + 1).join("")
  // '12345678910'

  // Array(10).fill(1).map((_, i) => i + 1).join()
  // '1,2,3,4,5,6,7,8,9,10'

  // Array(10).fill(1).map((_, i) => i + 1).join().match(/8/g)
  // ['8']

  // Array(10).fill(1).map((_, i) => i + 1).join().match(/8/g).length
  // 1

  // Array(20).fill(1).map((_, i) => i + 1).join().match(/8/g).length

  Array(10)
      .fill(0)
      .map((n, index) => n + index)
      .toString()
  // '0,1,2,3,4,5,6,7,8,9'

  [...Array(10)].map((_, i) => i + 1).filter(item => item === '8')

  let arr = []
  for(let i = 1;i<=10000;i++){
      arr.push(i);
  }
  let result = [...arr.join('')].filter(el=>el==='8').length
  console.log(result)

  // let arr = []
  // for(let i = 1;i<=20;i++){
  //     arr.push(i);
  // }
  // let result = [...arr.join('')]
  // console.log(result)
  // (31) ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0', '1', '1', '1', '2', '1', '3', '1', '4', '1', '5', '1', '6', '1', '7', '1', '8', '1', '9', '2', '0']

  // arr = [10, 20, 30, 40]
  // (4) [10, 20, 30, 40]
  // arr.join('')
  // '10203040'
  // [...'10203040']
  // (8) ['1', '0', '2', '0', '3', '0', '4', '0']
  // [...arr.join('')]
  // (8) ['1', '0', '2', '0', '3', '0', '4', '0']
  // [...'hello']
  // (5) ['h', 'e', 'l', 'l', 'o']
  ```

### 1.3.2 워밍업 문제(daum)

1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S = [1, 3, 4, 8, 13, 17, 20] 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

문제링크 : https://codingdojang.com/scode/408

- 풀이

  ```js
  let arr = [1, 3, 4, 8, 13, 17, 20];
  // 앞 요소나 뒤 요소를 알아야 하기 때문에 for of문은 적절치가 않습니다.
  for (i of arr) {
    console.log(i);
  }

  let arr = [1, 3, 4, 8, 13, 17, 20];
  for (i in arr) {
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // 마지막이 undefined, undefined - 20 X
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i + 1]);
    console.log("----------");
  }

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
    console.log(arr[i + 1]);
    console.log("----------");
  }

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i + 1] - arr[i]);
  }

  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i] - arr[i - 1]);
  }

  let s = [1, 3, 4, 8, 13, 17, 20];
  let arr = [];

  for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i - 1]);
  }

  let index = arr.indexOf(Math.min(...arr));
  console.log(s[index], s[index + 1]);

  // 기본적인 풀이
  let dots = [1, 3, 4, 8, 13, 17, 20];
  let 최솟값 = Infinity;
  let 최솟값인덱스 = 0;

  for (let i = 1; i < dots.length; i++) {
    if (Math.abs(dots[i] - dots[i - 1]) < 최솟값) {
      최솟값 = Math.abs(dots[i] - dots[i - 1]);
      최솟값인덱스 = i;
    }
  }
  console.log(dots[최솟값인덱스], dots[최솟값인덱스 - 1]);
  ```

  - 아래와 같은 방식으로 풀이 예정

  ```python
  list(zip('hello world', [10, 20, 30, 40, 50]))
  list(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]))
  sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])
  sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])[0]
  ```

  ```js
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  let s = [1, 3, 4, 8, 13, 17, 20];

  let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

  function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
      return -1;
    }
    if (a[1] - a[0] > b[1] - b[0]) {
      return 1;
    }
    return 0;
  }

  pairs.sort(비교);
  pairs.sort(비교)[0];
  ```

  ```js
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  let s = [1, 3, 4, 8, 13, 17, 20];

  let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
  let 최솟값 = Infinity;
  let 최솟값쌍 = [];

  for ([i, j] of pairs) {
    if (j - i < 최솟값) {
      최솟값 = j - i;
      최솟값쌍 = [i, j];
    }
  }
  ```

## 1.4 기본 자료구조 및 알고리즘

1. 스택과 큐
2. 연결리스트
3. 트리와 그래프
   - 3.1 트리 구현
   - 3.2 트리의 순회
4. 정렬 알고리즘
   - 4.1 선택정렬
   - 4.2 삽입정렬
   - 4.3 병합정렬
   - 4.4 퀵정렬
5. 페이지 교체 알고리즘
6. 슬라이딩 윈도우와 투 포인터 알고리즘

### 1.4.1 스택과 큐

    * 스택 : (삽입)arr.push, (삭제)arr.pop
    * 큐: (삽입)arr.push, (삭제)arr.shift
    * 큐: (삽입)arr.unshift, (삭제)arr.pop
    * arr.unshift(1000) : 맨 앞에 1000을 삽입합니다.
    * arr.shift() : 맨 앞에 값을 꺼냅니다.
    * arr.push : 맨 뒤에 값을 삽입합니다.
    * arr.pop : 맨 뒤에 값을 꺼냅니다.

    ```javascript
    class Stack {
        constructor(){
            this.arr = []; // 연결리스트로 구현할 수도 있지만, 지금 배우지 않았기에 배열로 구현합니다.
            this.length = 0;
        }

        push(data){
            this.arr.push(data);
            this.length += 1;
        }

        pop(index){
            if (this.length == 0){
                return
            }
            if (index > this.arr.length - 1){
                this.length -= 1
                return this.arr.pop()
            }
            let result = this.arr.splice(index, 1)
            this.length -= 1
            return result
        }

        empty(){
            if (this.length == 0){
                return 1
            } else {
                return 0
            }
        }

        top(){
            return this.arr[this.length - 1]
        }

        bottom(){
            return this.arr[0]
        }

        display(){
            return this.arr
        }
    }

    let s = new Stack()
    s.push(10)
    s.push(20)
    s.push(30)
    s.push(40)
    s.push(50)
    s.display()
    ```

### 1.4.2 연결리스트

- 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
- js에서는 그다지 메모리 효율이 좋지 못함
- 개념 : https://en.wikipedia.org/wiki/Linked_list
- 알고리즘 시각화 : https://visualgo.net/ko

1. step 1 - object로 linkedlist 구현

```javascript
// 여러분이 다 이해하실 수 있는 코드로 설명해보겠습니다.
const list = {
  head: {
    value: 46,
    next: {
      value: 49,
      next: {
        value: 97,
        next: {
          value: 12,
          next: null,
        },
      },
    },
  },
};
// list.head.next.next.value
// list.head.next.next.next.value

let list = {
  head: null,
};

let node1 = { value: 46, next: null };
let node2 = { value: 49, next: null };
let node3 = { value: 97, next: null };
let node4 = { value: 12, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

list.head = node1;

// let node4 = {value: 12, next: null}
// let node3 = {value: 97, next: node4}
// let node2 = {value: 49, next: node3}
// let node1 = {value: 46, next: node2}
```

- 문제

```js
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: {
            value: 21,
            next: null,
          },
        },
      },
    },
  },
};
list.head.next.next.next.value;
```

2. step 2 - class로 node 구현

```javascript
// 위 문제 처럼 만들어 보도록 하겠습니다.
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

node1 = new Node(90);
node2 = new Node(2);
node3 = new Node(77);
node4 = new Node(35);
node5 = new Node(21);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node1.data;
// 90
node1.next.next.data;
// 77
node1.next.next.next.data;
// 35
```

3. step 3 - class로 linkedList 구현

```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

// l.head.data
// 'init'
// l.head.next.data
// 1
// l.head.next.next.data
// 2
// l.head.next.next.next.data
// 3

// 새로운노드 = node(1, null)
// init.next 값은 null인데! null자리를 '새로운노드node(1, null)'로!
// this.tail은 이제 node(1, null)
//
// 새로운노드 = node(2, null)
// node(1, null).next 값은 null인데! null자리를 '새로운노드node(2, null)'로!
// node(1, null) = 새로운노드node(2, null)
//
// 새로운노드 = node(3, null)
// node(2, null).next값은 null인데! null자리를 '새로운노드node(3, null)'로!
// node(2, null) = 새로운노드node(3, null)
```

4. step 4 - class로 linkedList에서 length 구현

```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail

// 여기서 데이터를 추가하면 생성되는 노드마다 데이터 공간이 할당되는 것이라 메모리가 크게 필요하게 됩니다.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

5. step 5 - class로 linkedList에서 toString 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
    this.displayData = "";
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  toString() {
    return "<" + this.displayData.slice(0, -2) + ">";
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
    this.displayData += `${data}, `;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

6. step 6 - class로 linkedList에서 toArray 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
    this.displayData = "";
    this.displayDataArr = [];
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  toString() {
    return "<" + this.displayData.slice(0, -2) + ">";
  }

  toArray() {
    return this.displayDataArr;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
    this.displayData += `${data}, `;
    this.displayDataArr.push(data);
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

7. step 7 - (중요) toString을 순회로 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  toString() {
    let 순회용현재노드 = this.head;

    //처음 순회용 현재 노드가 init이기 때문에
    순회용현재노드 = 순회용현재노드.next;

    let 출력데이터 = "";
    for (let i = 0; i < this.length; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    return 출력데이터;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

8. step 8 - data를 arr로 만들기

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  toString() {
    let 순회용현재노드 = this.head;

    //처음 순회용 현재 노드가 init이기 때문에
    순회용현재노드 = 순회용현재노드.next;

    let 출력데이터 = "";
    for (let i = 0; i < this.length; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    // return 출력데이터;
    return "[" + 출력데이터.slice(0, -2) + "]";
  }

  fullData() {
    return JSON.parse(this.toString());
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

9. step 9 - linked list에 node 삽입하기

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  toString() {
    let 순회용현재노드 = this.head;

    //처음 순회용 현재 노드가 init이기 때문에
    순회용현재노드 = 순회용현재노드.next;

    let 출력데이터 = "";
    for (let i = 0; i < this.length; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    // return 출력데이터;
    return "[" + 출력데이터.slice(0, -2) + "]";
  }

  fullData() {
    return JSON.parse(this.toString());
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }

  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(data);
    새로운노드.next = 순회용현재노드.next;
    순회용현재노드.next = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

10. Double linked list의 기본 형태

```js
const list = {
  head: null,
};

let list1 = { value: 12, next: null, pre: null };
let list2 = { value: 99, next: null, pre: null };
let list3 = { value: 37, next: null, pre: null };
let list4 = { value: 2, next: null, pre: null };

list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list.head;
list2.pre = list1;
list3.pre = list2;
list4.pre = list3;

list1.next.next.value;
// 37
list3.pre.pre.value;
// 12
list4.pre.pre.pre.next.next.value;
// 37
```

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.pre = null;
  }
}

class DoubleLinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
  }

  append(data) {
    let 새로운노드 = new Node(data);

    this.tail.next = 새로운노드;
    새로운노드.pre = this.tail;

    this.tail = 새로운노드;
  }
}

l = new DoubleLinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

### 1.4.3 트리와 그래프

```js
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 69,
        left: null,
        right: null,
      },
    },
  },
};

tree.root.left.left.value; //1
```

object나 array로 tree나 linked listf를 구현할 수 있는데 왜 class로 구현할까?

1. 더 lite한 모델을 만들기
2. 확장성(메서드 같은 것을 만들 수 있음)

// node를 만들어서 삽입하는 식으로 구현

```js
const root = {
  value: 55,
  left: null,
  right: null,
};

node1 = { value: 53, left: null, right: null };
node2 = { value: 99, left: null, right: null };
node3 = { value: 37, left: null, right: null };
node4 = { value: 54, left: null, right: null };

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.root;
// 55
root.right.value;
// 99
root.left.value;
// 53
root.left.left.value;
// 37
```

tree class로 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(55);
let node1 = new Node(53);
let node2 = new Node(99);
let node3 = new Node(37);
let node4 = new Node(54);

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.data;
// 55
root.left.data;
// 53
root.left.left.data;
// 37
root.left.right.data;
// 54
```

- 트리 구현

* Tree 데이터 삽입

```js
class Node {
  constructor(data) {
    this.data = data;
    // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.length = 0;
  }

  // length(){ // this.length와 이름이 같아서 작동하지 않습니다.
  //     return this.length
  // }

  insert(data) {
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (data == 순회용현재노드.data) {
        // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않습니다.
        return;
      } else if (data < 순회용현재노드.data) {
        // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
        // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.

        // !null = true 비어있으면 실행
        if (!순회용현재노드.left) {
          순회용현재노드.left = 새로운노드;
          this.length += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      } else if (data > 순회용현재노드.data) {
        // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
        // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
        if (!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          this.length += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }
  }
}

let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(7);
```

- Tree 데이터 순회

```js
class Node {
  constructor(data) {
    this.data = data;
    // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.length = 0;
  }

  // length(){ // this.length와 이름이 같아서 작동하지 않습니다.
  //     return this.length
  // }

  insert(data) {
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (data == 순회용현재노드.data) {
        // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않습니다.
        return;
      } else if (data < 순회용현재노드.data) {
        // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
        // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.

        // !null = true 비어있으면 실행
        if (!순회용현재노드.left) {
          순회용현재노드.left = 새로운노드;
          this.length += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      } else if (data > 순회용현재노드.data) {
        // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
        // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
        if (!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          this.length += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }
  }
  // 깊스너큐
  DFS() {
    // 깊이우선탐색
    // Stack
    let 방문경로 = [];
    let 스택 = [this.root];

    while (스택.length !== 0) {
      let current = 스택.pop();

      if (current.right) {
        스택.push(current.right);
      }
      if (current.left) {
        스택.push(current.left);
      }
      방문경로.push(current.data);
    }
    return 방문경로;
  }

  BFS() {
    // 너비우선탐색, BFS(Breadth First Search)
    // Queue 이용!
    let 방문경로 = [];
    let 큐 = [this.root];

    while (큐.length !== 0) {
      let current = 큐.shift();
      if (current.right) {
        큐.push(current.right);
      }
      if (current.left) {
        큐.push(current.left);
      }
      방문경로.push(current.data);
    }

    return 방문경로;
  }
}
let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(7);
```

### 1.4.4 정렬 알고리즘

- 재미있는 사실(재미없을 수도 있습니다. 사례를 말씀드릴게요.)
  - JavaScript의 Array의 sort는 알고리즘이 고정이 아닙니다. 각 브라우저마다(벤더사마다) 다른 sort를 사용하고 있어서 같은 값이면 브라우저마다 보여지는 화면이 다를 수 있습니다.
  - Google이 Chrome 70 이전에 개수에 따라 다른 알고리즘을 혼합하는 정렬을 사용했다가(InsertionSort & QuickSort 사용) 얼마전에(18년도에) Timsort로 변경했습니다.
  - 정렬 알고리즘 중에서 가장 인기있는 알고리즘은 병합정렬(존 폰 노이만 제작)이었습니다.
  - Python에서 시작된 Timsort로(팀 피터스) 대동단결하고 있는 모양세입니다. Python 만세!
  - Timsort는 삽입정렬과 병합정렬을 적절히 조합한 것이고, 2002년도에 Python을 위해 C로 구현되었습니다.
  - 정렬 알고리즘 3대장 비교(Bset, Worst)
    - 병합 정렬 : nlogn, nlogn
    - 퀵 정렬 : nlogn, n\*\*2
    - 팀소트 : n, nlogn
- 정렬 알고리즘을 작성할 때 주의사항

```js
// 입력값.length는 고정값이 아닙니다!
// block 안에서 pop을 하게 되면 length가 변합니다.
입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
for (let i = 0; i < 입력값.length; i++) {
  console.log(입력값.pop());
  console.log(i);
}
// 아래와 같이 출력해보세요.
입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
for (let i = 0; i < 입력값.length; i++) {
  console.log(입력값.pop());
  console.log(i);
  console.log(입력값.length);
}
```

#### 1.4.4.1 선택정렬

- step

  - step 1

  ```
  전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
  후 = []
  ```

  - step 2

  ```
  전 = [199, 22, 33, 32, 64, 72, 222, 233]
  후 = [12]
  ```

  - step 3

  ```
  전 = [199, 33, 32, 64, 72, 222, 233]
  후 = [12, 22]
  ```

  - step 4

  ```
  전 = [199, 33, 64, 72, 222, 233]
  후 = [12, 22, 32]
  ```

  - step 5

  ```
  전 = [199, 64, 72, 222, 233]
  후 = [12, 22, 32, 33]
  ```

- 선택정렬 구현

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
// let 길이 = 입력값.length // 가변될 수 있는 값을 미리 변수로 선언하는 방식을 사용할 수도 있습니다.

// 빈 배열도 true이기 떄문에 , 문자열로 변환시킨다. 빈 문자열은 false이기 떄문!
while (!!입력값.toString()) {
  // !! 안해주어도 됩니다.
  let 최솟값 = Math.min(...입력값);
  정렬된배열.push(최솟값);
  입력값.splice(입력값.indexOf(최솟값), 1);
}

console.log(정렬된배열);

// 메서드 최소화된 코드
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

function selectionSort(arr) {
  // [199, 22, 33, 12, 32, 64, 72, 222, 233]
  // 첫번째 순회
  // min_index = 0
  // 두번째 순회
  // arr[min_index] > arr[j]
  // arr[0] > arr[1] -> min_index = 1
  // arr[1] > arr[2] -> min_index = 1
  // arr[1] > arr[3] -> min_index = 3
  // arr[3] > arr[4] -> min_index = 3
  // arr[3] > arr[5] -> min_index = 3
  // arr[3] > arr[6] -> min_index = 3
  // arr[3] > arr[7] -> min_index = 3
  // arr[0](199) <-> arr[3](12)
  // 순회가 돌면 돌 수록 최솟값이 앞에 배치되게 된다.
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort(입력값));
```

#### 1.4.4.2 삽입정렬

- step

  - step 1

  ```
  전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
  후 = []
  ```

  - step 2

  ```
  전 = [22, 33, 12, 32, 64, 72, 222, 233]
  후 = [199]
  ```

  - step 3

  ```
  전 = [33, 12, 32, 64, 72, 222, 233]
  후 = [22, 199]
  ```

  - step 4

  ```
  전 = [12, 32, 64, 72, 222, 233]
  후 = [22, 33, 199] // 이렇게 껴들려면 껴들 수 있는 index를 알아내야 합니다.
  ```

  - step 5

  ```
  전 = [32, 64, 72, 222, 233]
  후 = [12, 22, 33, 199]
  ```

* 구현코드

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값) {
  for (const i in 정렬된배열) {
    if (삽입값 < 정렬된배열[i]) {
      return i;
    }
  }
  return 정렬된배열.length;
}

for (let i = 0; 배열의길이; i++) {
  let 삽입값 = 입력값.shift();
  let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값);
  정렬된배열.splice(인덱스, 0, 삽입값);
}
```

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];

let 정렬된배열 = [];

let 배열의길이 = 입력값.length;

삽입값 = 199;
let 입력값 = [22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [199];

let 입력값 = [33, 12, 32, 64, 72, 222, 233];
삽입값 = 22;
인덱스 = 0;
let 정렬된배열 = [22, 199];

let 입력값 = [12, 32, 64, 72, 222, 233];
삽입값 = 33;
인덱스 = 1;
let 정렬된배열 = [22, 33, 199];

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값) {
  for (const i in 정렬된배열) {
    if (삽입값 < 정렬된배열[i]) {
      return i;
    }
  }
  return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
  let 삽입값 = 입력값.shift();
  let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값);
  정렬된배열.splice(인덱스, 0, 삽입값);
}
```

#### 1.4.4.3 병합정렬

- step

  - step 1

  ```js
      // 분할
      [5, 10, 66, 77, 54, 32, 11, 15] //
      [5, 10, 66, 77], [54, 32, 11, 15] //
      [5, 10], [66, 77], [54, 32], [11, 15] //
      [5], [10], [66] ,[77], [54] ,[32], [11], [15] //


      //정복
      [5,10], [66,77], [32, 54], [11,15] //
      [5,10, 66,77], [32,11,15,54] //

      // [], [] 맨 앞에꺼랑 비교하고 작으면 넣고 사라진다.
      // 비교대상이 없으면 그대로 들어간다
      [5,10, 66,77], [32,11,15,54] //
      [5,10, 66,77], [32,11,15,54] //
      // 해보슈
      [5, ]

  ```

* 구현코드
  - step 1

```js
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;
  if (입력배열의길이 <= 1) {
    //[], [1]
    return 입력배열;
  }

  //~~ 는 parseInt 같다. 즉, parseInt(입력배열의길이 / 2)
  let 중간값 = ~~(입력배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  return `그룹하나: ${그룹하나}\n그룹둘: ${그룹둘}\n\n`;
}

console.log(병합정렬(입력값));
```

- step 2

```js
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  // 분할
  let 입력배열의길이 = 입력배열.length;
  let 결과값 = [];
  if (입력배열의길이 <= 1) {
    //[], [1]
    return 입력배열;
  }

  //~~ 는 parseInt 같다. 즉, parseInt(입력배열의길이 / 2)
  let 중간값 = ~~(입력배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  // return `그룹하나: ${그룹하나}\n그룹둘: ${그룹둘}\n\n`
  // 정복
  while (그룹하나.length != 0 && 그룹둘.length != 0) {
    if (그룹하나[0] < 그룹둘[0]) {
      결과값.push(그룹하나.shift());
    } else {
      결과값.push(그룹둘.shift());
    }
  }
  while (그룹하나.length != 0) {
    결과값.push(그룹하나.shift());
  }
  while (그룹둘.length != 0) {
    결과값.push(그룹둘.shift());
  }
  // 비교대상이 없다면 그냥 리턴
  return 결과값;
}

console.log(병합정렬(입력값));
```

- 병합정렬 개선 코드

```js
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  // 분할
  let 입력배열의길이 = 입력배열.length;
  let 결과값 = [];
  if (입력배열의길이 <= 1) {
    //[], [1]
    return 입력배열;
  }

  //~~ 는 parseInt 같다. 즉, parseInt(입력배열의길이 / 2)
  let 중간값 = ~~(입력배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  // return `그룹하나: ${그룹하나}\n그룹둘: ${그룹둘}\n\n`
  // 정복
  while (그룹하나.length != 0 && 그룹둘.length != 0) {
    if (그룹하나[0] < 그룹둘[0]) {
      결과값.push(그룹하나.shift());
    } else {
      결과값.push(그룹둘.shift());
    }
  }

  // 개선된 코드
  결과값 = [...결과값, ...그룹하나];
  결과값 = [...결과값, ...그룹둘];

  // 비교대상이 없다면 그냥 리턴
  return 결과값;
}

console.log(병합정렬(입력값));
```

#### 1.4.4.3 퀵정렬

- step

  ```js

  //원본
  [66, 77, 54, 32, 10, 5, 11, 15]


  - step 1
  - 피봇값 : 66
  [54, 32, 10, 5, 11, 15] + [66] + [77]

  - step 2
  - 피봇값 : 54
  [54] +  [32, 10, 5, 11, 15] + [66] + [77]
  [32,10,5,11,15] + [54] + [66] + [77]


  - step 3
  - 피봇값 : 32
  [32,10,5,11,15] + [54] + [66] + [77]
  [32,10,5,11,15] + [54] + [66] + [77]
  [10,5,11,15] + [32] + [54] + [66] + [77]

    - step 4
  - 피봇값 : 10
  [5] + [10] + [11,15]+ [32] + [54] + [66] + [77]

      - step 4
  - 피봇값 : 10
  [5] + [10] + [11,15]+ [32] + [54] + [66] + [77]
  ```

  ```js
  let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

  function 퀵정렬(입력배열) {
    let 입력배열의길이 = 입력배열.length;

    if (입력배열의길이 <= 1) {
      return 입력배열;
    }
    let 피벗값 = [입력배열.shift()];
    let 그룹하나 = [];
    let 그룹둘 = [];

    for (let i in 입력배열) {
      if (입력배열[i] < 피벗값) {
        그룹하나.push(입력배열[i]);
      } else {
        그룹둘.push(입력배열[i]);
      }
    }

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
  }

  퀵정렬(입력값);
  ```

  ## 2.1 코테 실전 풀이

  ### 2.1.1 18년도

  - <!-- https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=python3 -->
  - 주제 : 2진법, 진법 연산, replace, or 연산

  ```js
  // step 1
  function solution(n, arr1, arr2) {
    answer = [];
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);

    for ([i, j] of zip(arr1, arr2)) {
      answer.push(
        (i | j)
          .toString(2)
          .padStart(n, "0")
          .replace(/1/g, "#")
          .replace(/0/g, " ")
      );
    }
    return answer;
  }
  solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
  solution(3, [3, 20, 28, 18, 11], [1, 1, 21, 17, 28]);
  ```

```js
//step1
testcase = [
  "1S2D*3T", //37
  "1D2S#10S", //9
  "1D2S0T", //3
];

function solution(dartResult) {
  let answer = [];
  let result = 0;
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    }
  }
  return answer;
}

console.log(solution(testcase[0]));
console.log(solution(testcase[1]));
console.log(solution(testcase[2]));

// 정규표현식을 사용하면 보다 편하게 문자열 parsing문제를 풀 수 있다
//'1S2D*3T'.match(/([0-9]|10)([SDT])([\*\#]?)/g)
```

```js

// step2
testcase = [
  "1S2D*3T", //37
  "1D2S#10S", //9
  "1D2S0T", //3
];

function solution(dartResult) {
  let answer = [];
  let result = 0;
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if(dartResult)
      temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*"){
      answer = answer.map(a=> a*2)
    } else if ()
  }
  return answer;
}

console.log(solution(testcase[0]))
console.log(solution(testcase[1]))
console.log(solution(testcase[2]))

// 정규표현식을 사용하면 보다 편하게 문자열 parsing문제를 풀 수 있다
//'1S2D*3T'.match(/([0-9]|10)([SDT])([\*\#]?)/g)


```

```js
function solution(dartResult) {
  let answer = [];
  let result = 0;
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        // continue
        i++;
      } else {
        temp = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] == "#") {
      answer[answer.length - 1] *= -1;
    }
  }
  for (const value of answer) {
    result += value;
  }
  return result;
}
```

```js
//번외편
```

### 2.1.1 캐시(18년)
