import React, { useContext } from "react";
import {fruitOrderContext} from "../App";

export default function Home() {
  const { apples, bananas, pears } = useContext(fruitOrderContext);
  return <div>{apples + bananas + pears} stuks fruit besteld </div>;
}
