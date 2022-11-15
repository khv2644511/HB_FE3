import React from "react";

export default function Profile({ email, img }) {
  return (
    <div>
      profile
      <p>{email}</p>
      img: <img src={img} alt="" />
    </div>
  );
}
