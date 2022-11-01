class _Node {
  constructor(data = null, next = null) {
    this._data = data;
    this._next = next;
  }
}

// 링크드 리스트의 가장 큰 특징 현재노드를 삭제할 수 없고 임의의 노드의 다음 노드를 삭제할 수 있다.
class SinglyList {
  constructor() {
    let init = new _Node("init");
    this.head = init;
    // tail정보로 맨뒤에 삽입 O(1)으로 시간단축
    // 하지만 맨 뒤에 삭제는 여전히 O(n)이다. 현재 위치의 노드로 바로 삭제할 수 없다는 것이 단순연결리스트의 특징!!!
    this.tail = init;
    // 노드의 갯수
    this.length = 0;
  }

  // 맨 앞에 노드 추가
  insertFirst(data) {
    // head와 tail모두 init인 경우
    if (this.head._data == "init" && this.tail._data == "init") {
      let newNode = new _Node(data);
      this.head._next = newNode;
      // tail은 계속 업데이트가 되어야 된다.
      this.tail = newNode;
    } else {
      let newNode = new _Node(data, this.head._next);
      this.head._next = newNode;
    }
    this.length++;
  }

  // 맨 뒤 노드 삭제
  deleteFirst() {
    if (this.length == 0) {
      return false;
    } else if (this.length == 1) {
      let init = new _Node("init");
      this.head = init;
      this.tail = init;
    } else {
      this.head._next = this.head._next._next;
    }
    this.length--;
  }

  // 임의의 노드의 다음에 노드를 삽입
  insertNext(data, p) {
    p._next = new _Node(data, p._next);
    // p가 tail인 경우
    if (p == this.tail) {
      this.tail = p._next;
    }
    this.length++;
  }

  // 임의의 노드의 다음노드 삭제
  deleteNext(p) {
    // p가 tail인 경우
    if (p == this.tail) {
      return false;
    }
    let nextNode = p._next;
    p._next = nextNode._next;

    // 삭제할려고 했던 다음노드가 tail인 경우 tail정보를 업데이트
    if (nextNode == this.tail) {
      this.tail = p;
    }
    this.length--;
  }

  traverse() {
    let curr = this.head._next;
    let str = "";
    while (curr != null) {
      str = str + curr._data.toString() + " -> ";
      curr = curr._next;
    }
    str = str + "null";
    // console.log(str);
    return str;
  }
}
