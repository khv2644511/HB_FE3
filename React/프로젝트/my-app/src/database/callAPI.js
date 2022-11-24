import { createContext } from "react";

async function callAPI() {
  const res = await fetch("http://35.76.53.28:8080/mall");
  const result = await res.json();
  return result;
}

export const callAPIResponse = createContext(callAPI());
