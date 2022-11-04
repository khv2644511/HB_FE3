/** @format */

class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".list-item");
  }

  async setup() {
    await this.loadData((json) => {
      this.colaFactory(json);
    });
  }

  async loadData(callback) {
    // ** AJAX로 불러오는 방법 **
    // const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성합니다.
    // requestObj.open("GET", "src/js/item.json"); //요청 시작
    // requestObj.onreadystatechange = () => {
    //   // readyState 가 변화하면 트리거
    //   if (requestObj.readyState === 4 && requestObj.status === 200) {
    //     callback(JSON.parse(requestObj.responseText));
    //     // console.log("hi");
    //   }
    // };
    // requestObj.send(null);

    const response = await fetch("src/js/item.json"); //await는 async 함수와만 사용할 수 있음

    if (response.ok) {
      // http 상태코드가 200 ~ 299일 경우 true를 반환 // http 상태코드
      callback(await response.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
    } else {
      alert("통신 에러!" + response.status);
    }
  }

  //   <li>
  // <button type="button" class="btn-item" data-item="">
  //   <img src="src/images/Original_Cola.png" alt="" class="img-item">
  //   <strong class="tit-item">Original_Cola</strong>
  //   <span class="txt-price">1000원</span>
  // </button>
  // </li>
  colaFactory(data) {
    console.log(data);
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
        <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
            <img src="src/images/${el.img}" alt="" class="img-item">
            <strong class="tit-item">${el.name}</strong>
            <span class="txt-price">${el.cost}원</span>
        </button>
        `;
      item.innerHTML = itemTemplate;
      docFrag.appendChild(item);
    });
    this.itemList.appendChild(docFrag);
  }
}

// 1개만 쓰면 default
// 1개가 아니라면 export {담을 정보} ColaGenerator
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export
export default ColaGenerator;
