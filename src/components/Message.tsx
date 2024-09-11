import React from "react";
import { fortuneData } from "../utility/fortune-cookie";

const Message = () => {
  const randomFortune =
    fortuneData[Math.floor(Math.random() * fortuneData.length)];
  return <div>{randomFortune}</div>;
};

export default Message;
