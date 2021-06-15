import React from "react";

export default function Counters(props) {
  const { apples, setApples, bananas, setBananas, pears, setPears } = props;

  return (
    <div>
      <div>
        <h3>🍎: {apples}</h3>
        <button onClick={() => setApples(apples + 1)}>+</button>
        <button onClick={() => setApples(apples - 1)}>-</button>
      </div>
      <div>
        <h3>🍌: {bananas}</h3>
        <button onClick={() => setBananas(bananas + 1)}>+</button>
        <button onClick={() => setBananas(bananas - 1)}>-</button>
      </div>
      <div>
        <h3>🍐: {pears}</h3>
        <button onClick={() => setPears(pears + 1)}>+</button>
        <button onClick={() => setPears(pears - 1)}>-</button>
      </div>
    </div>
  );
}
