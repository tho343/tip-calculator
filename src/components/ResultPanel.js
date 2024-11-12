import React, {useState} from "react";
export const ResultPanel = ({ serviceList, onSplit }) => {
  const [showResult, setShowResult] = useState(false);
  function handleOnClick(){
    setShowResult(true)
    onSplit()
 
  }
  return (
    <div className="bg-very-dark-cyan h-[200px] md:w-[413px] md:h-[417px] p-7 rounded-lg">
      <h1 className="text-xl text-white">Tip amount</h1>
      {showResult && <ul>
        {serviceList.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span className="text-light-grayish-cyan">{item.employee}</span>
            <span className="text-primary text-3xl">${item.tipAmount}</span>
          </li>
        ))}
      </ul>}
      
      <button
          className="bg-primary p-[9px] grid-cols-subgrid col-span-2"
          onClick={handleOnClick}
        >
          Split Tip
        </button>
    </div>
  );
};
