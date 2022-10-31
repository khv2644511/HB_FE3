// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 문제 링크 : https://codingdojang.com/scode/393
// let str = "";
// for (let i = 1; i < 10001; i++) {
//   str += i;
// }
// // console.log(str);
// console.log(str.match(/8/g).length);

// const arr = new Array(10000).fill(0).map((_, value) => value + 1).join('').match(/8/g).length

// const arr = new Array(10).fill(1).map((_, idx) => idx + 1);
// const arr1 = [...Array(10000)]
//   .map((_, idx) => idx + 1)
//   .toString()
//   .match(/8/g).length;
// console.log(arr1);

// let arr = [];
// for (let i = 1; i <= 20; i++) {
//   arr.push(i);
// }

// let result = [...arr.join("")];

let S = [1, 3, 4, 8, 13, 17, 20];
let list_ = [];

// for (let i = 0; i < S.length - 1; i++) {
//   console.log(S[i + 1] - S[i]);
// }
// let min = Math.abs(S[i - 1] - S[i]);
// for (let i = 1; i < S.length; i++) {
//   // console.log(S[i - 1] - S[i]);
//   let min = Math.abs(S[i - 1] - S[i]);
//   list_.push(min);
// }
// console.log(S);
// console.log(list_);

// console.log(Math.min(...list_));
// let index = list_.indexOf(Math.min(...list_));
// console.log(S[index], S[index + 1]);

// const zip = (a, b) => a.map((v, i) => [v, b[i]]);

// let s = [1, 3, 4, 8, 13, 17, 20];
// console.log(s.slice(1));
// let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
// console.log(pairs);

// const list = {
//   head: {
//     value: 46,
//     next: {
//       value: 49,
//       next: {
//         value: 97,
//         next: {
//           value: 12,
//           next: null,
//         },
//       },
//     },
//   },
// };
// console.log(list.head.next.next.next.value);

// let list = {
//   head: null,
// };

// let node1 = { value: 46, next: null };
// let node2 = { value: 49, next: null };
// let node3 = { value: 97, next: null };
// let node4 = { value: 12, next: null };

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// list.head = node1;

// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
let list = {
  head: null,
};

let node1 = { value: 90, next: null };
let node2 = { value: 2, next: null };
let node3 = { value: 77, next: null };
let node4 = { value: 35, next: null };
let node5 = { value: 21, next: null };

list.head = node1;

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(list.head.next.next.next.value);

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

  length() {
    return this.length;
  }

  toString() {
    return "[" + this.displayData.slice(0, -2) + "]";
  }

  toArray() {
    return this.displayDataArr;
  }
  append(data) {
    let 새로운노드 = new Node(data);
    this.tail.next = 새로운노드;
    this.tail;
    this.length += 1;
    this.displayData += `${data}, `;
    this.displayDataArr.push(data);
  }
}

l = new LinkedList();
l.append(2);
l.append(1);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

//중요!! - toString을 순회로 구현
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

  length() {
    return this.length;
  }

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

class _Node {
  constructor(data = null, next = null) {
    this._data = data;
    this._next = next;
  }
}

class SinglyList {
  constructor() {
    let init = new _Node("init");
    this.head = init;
    // tail정보로 맨뒤에 삽입 O(1), 하지만 맨 뒤에 삭제는 O(n)이다. 현재 위치의 노드로 바로 삭제할 수 없다는 것이 단순연결리스트의 특징!!!
    this.tail = init;

    // 노드의 갯수
    this.length = 0;
  }

  insertFirst(data) {
    if (this.head == null && this.tail == null) {
      let newNode = new _Node(data);
      this.head = newNode;
      // tail은 계속 업데이트가 되어야 된다.
      this.tail = newNode;
    } else {
      let newNode = new _Node(data, this.head);
      this.head = newNode;
    }
    this.length++;
  }

  deleteFirst() {
    if (this.length == 0) {
      return false;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head._next;
    }
    this.length--;
  }

  insertNext(data, p) {
    p._next = new _Node(data, p._next);

    if (p == this.tail) {
      this.tail = p._next;
    }

    this.length++;
  }

  deleteNext(p) {
    // 만약 tail뒤의 노드를 삭제한 경우
    if (p == this.tail) {
      return false;
    }

    nextNode = p._next;
    p._next = nextNode._next;

    // 삭제할려고 했던 다음노드가 tail인 경우 tail정보를 업데이트
    if (nextNode == this.tail) {
      this.tail = p;
    }

    this.length--;
  }
}

class _Node {
  constructor(data = null, next = null) {
    this._data = data;
    this._next = next;
  }
}

class SinglyList {
  constructor() {
    let init = new _Node("init");
    this.head = init;
    // tail정보로 맨뒤에 삽입 O(1), 하지만 맨 뒤에 삭제는 O(n)이다. 현재 위치의 노드로 바로 삭제할 수 없다는 것이 단순연결리스트의 특징!!!
    this.tail = init;

    // 노드의 갯수
    this.length = 0;
  }

  insertFirst(data) {
    if (this.head == null && this.tail == null) {
      let newNode = new _Node(data);
      this.head = newNode;
      // tail은 계속 업데이트가 되어야 된다.
      this.tail = newNode;
    } else {
      let newNode = new _Node(data, this.head);
      this.head = newNode;
    }
    this.length++;
  }

  deleteFirst() {
    if (this.length == 0) {
      return false;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head._next;
    }
    this.length--;
  }

  insertNext(data, p) {
    p._next = new _Node(data, p._next);

    if (p == this.tail) {
      this.tail = p._next;
    }

    this.length++;
  }

  deleteNext(p) {
    // 만약 tail뒤의 노드를 삭제한 경우
    if (p == this.tail) {
      return false;
    }

    nextNode = p._next;
    p._next = nextNode._next;

    // 삭제할려고 했던 다음노드가 tail인 경우 tail정보를 업데이트
    if (nextNode == this.tail) {
      this.tail = p;
    }

    this.length--;
  }
}
