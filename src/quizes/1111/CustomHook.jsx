import { useEffect } from "react";

function useCustomHook() {
  console.log("4");

  useEffect(() => {
    console.log("5");
  });
  console.log("6");

  return <h1>child</h1>;
}

export default useCustomHook;
