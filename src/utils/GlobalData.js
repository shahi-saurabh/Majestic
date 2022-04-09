import React, { useState, useEffect } from "react";

export default async function GlobalData(data) {
  const [recData, setRecData] = useState(data);
  const retDat = async (data) => {
    console.log("retData fuction -> ", data);
    setRecData(data);
    return recData;
  };

  try {
    console.log("Retutning data -> ", data);
    return await retDat(data);
  } catch (e) {
    console.log("GlobalData error -> ", e);
  }
}
