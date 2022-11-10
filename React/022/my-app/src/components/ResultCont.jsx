import React from "react";

export default function ResultCont() {
  return (
    <>
      <section className="cont-result">
        <h2 className="blind">결과 확인</h2>
        <p className="txt-wannabe">
          당신은
          <strong className="field-result"></strong>
          전문가가 되기 위해서
          <br />
          대략
          <strong className="time-result"></strong>일 이상 훈련하셔야 합니다! :)
        </p>
        <button className="btn-go">훈련하러 가기 GO!GO!</button>
        <button className="btn-share">공유하기</button>
      </section>
    </>
  );
}
