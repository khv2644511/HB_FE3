import React from "react";

export default function Modal() {
  return (
    <>
      <section id="modal">
        <h2 className="blind">응원화면 모달</h2>
        <article className="modal_wrap">
          <h3 className="blind">응원 문구</h3>
          <p className="tit-modal">화이팅!!</p>
          <p className="cont-modal">당신의 꿈을 응원합니다.</p>
          <img
            className="img-licat"
            src="img/licat.png"
            alt="응원하는 라이이켓"
          />
          <button className="btn-close">
            종료하고 진짜 훈련하러 가기 GO!GO!
          </button>
        </article>
      </section>
    </>
  );
}
