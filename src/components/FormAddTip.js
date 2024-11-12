import React from "react";
import { useState } from "react";

export const FormAddTip = ({ onAddTip }) => {
  const [tip, setTip] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    onAddTip(tip);
  }
  return (
    <div className="p-5 bg-light-grayish-cyan rounded-lg mt-5">
      <h3>Add Tip Amount</h3>
      <form className="mt-2 grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
        <input
          value={tip}
          onChange={(e) => setTip(Number(e.target.value))}
          placeholder="Enter Amount"
          type="number"
          className="bg-very-light-grayish-cyan py-[6px] px-[17px] flex justify-between"
        ></input>

        <button className="bg-primary p-[9px]">Add</button>
      </form>
    </div>
  );
};
