/** @format */

import ColaGenerator from "./components/colaGenerator.js";
import Vendingmachine from "./components/vendingMachine.js";

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// await

// top level 에서도 작동하기 때문에 자동실행함수로 작성하지 않아도됨
await colaGenerator.setup();
vendingmachine.setup(); //await를 사용하지않으면 콜라를 다 불러오기 전에 실행되기 때문에 콜라 버튼을 눌러도 이벤트가 실행되지 않음 => colaGenerator.setup()에 await, async 써주기

// (async () => {
//     await colaGenerator.setup();
//     vendingmachine.setup(); //await를 사용하지않으면 콜라를 다 불러오기 전에 실행되기 때문에 콜라 버튼을 눌러도 이벤트가 실행되지 않음 => colaGenerator.setup()에 await, async 써주기
// })()
