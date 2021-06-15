import React, { useContext } from "react";
import {fruitOrderContext} from "../App";

export default function Checkout() {
  const { apples, bananas, pears} = useContext(fruitOrderContext);

  return (
    <div>
      <div>
        <h3>🍎: {apples}</h3>
      </div>
      <div>
        <h3>🍌: {bananas}</h3>
      </div>
      <div>
        <h3>🍐: {pears}</h3>
      </div>
      <button
          onClick={console.log("apples:", apples, "bananas:", bananas, "pears", pears)}
      >
          Checkout!</button>
    </div>
  );
}
