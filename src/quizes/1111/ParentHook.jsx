import React, { useEffect } from "react";
import useCustomHook from "./CustomHook";

function ParentUseEffExe() {

  console.log("1");
  useCustomHook();
  useEffect(() => {
    console.log("2");
  });
  console.log("3");

  return <h1>parent</h1>;
}

export default ParentUseEffExe;


