class _Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

//이중연결리스트 양방향으로 이동가능하며 header와 trailer도 노드로 'data'가 없는 형태로 생성
class DList {
  constructor() {
    this.header = new _Node("header", null, null);
    this.trailer = new _Node("trailer", null, null);
    this.header.next = this.trailer;
    this.trailer.prev = this.header;

    this.length = 0;
  }

  insertBetween(data, prede, succ) {
    let newNode = new _Node(data, prede, succ);
    succ.prev = newNode;
    prede.next = newNode;
    this.length++;
  }

  insertAfter(data, p) {
    if (p == this.trailer) {
      return false;
    } else {
      this.insertBetween(data, p, p.next);
    }
  }

  insertBefore(data, p) {
    if (p == this.header) {
      return false;
    } else {
      this.insertBetween(data, p.prev, p);
    }
  }

  delete(node) {
    if (node == this.header || node == this.trailer) {
      return false;
    }

    let prede = node.prev;
    let succ = node.next;
    prede.next = succ;
    succ.prev = prede;
    this.length--;
    let data = node.data;
    node.prev = null;
    node.next = null;
    node.data = null;
    return data;
  }
}
