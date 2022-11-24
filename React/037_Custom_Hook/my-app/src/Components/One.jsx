// import React, { useState } from "react";

// function One() {
//   const [value, setValue] = useState("");
//   function onChange(e) {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//       <input type="text" onChange={onChange} />
//       <div>{value}</div>
//     </>
//   );
// }

// export default One;

import React from "react";
import useInput from "../../../../037_Custom_Hook/my-app/src/Hook/useInput";

function InputComponent() {
  const [value, onChange] = useInput("");
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}
export default InputComponent;
