import React, { useState } from "react";
import ButtonNum from "./components/ButtonNum";

export default function App() {
  const [screenValue, setScreenValue] = useState("");
  const handleChange = () => {};

  const handleClick = (num) => {
    if (num === "c") {
    
      if (screenValue) {
        const value=screenValue.slice(0, -1);
        setScreenValue(value)
      }

    } else if (num === "=") {
      setScreenValue((prev) => {
        const el = eval(prev);
        return el.toString();
      });
  
    } else if (num === "DEL") {
      setScreenValue("");
    }else if(num==="+/-"){
      setScreenValue((prev) => Math.ceil(Number(prev)).toString());
    }
    else {
      setScreenValue((prev) => prev + num);
    }
  };
  return (
    <div>
      <h3 className="text-2xl capitalize font-montserrat font-black text-slate-500 border-2 py-1 text-center mt-14 mb-6">calcalutor</h3>
      <div className=" border mx-auto w-[95%] sm:w-[400px] pt-12 pb-8 rounded-lg px-8 bg-gray-600">
      <div>
        <input
          onChange={handleChange}
          className=" bg-slate-200 block w-full text-4xl py-10 text-right outline-none rounded-md pr-3d"
          type="text"
          value={screenValue}
        />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4">
        <ButtonNum handleClick={handleClick} value="c" />
        <ButtonNum handleClick={handleClick} value="+/-" />
        <ButtonNum handleClick={handleClick} value="%" />
        <ButtonNum bg="bg-purple-500" handleClick={handleClick} value="/" />
        <ButtonNum handleClick={handleClick} value="7" />
        <ButtonNum handleClick={handleClick} value="8" />
        <ButtonNum handleClick={handleClick} value="9" />
        <ButtonNum bg="bg-purple-500" handleClick={handleClick} value="*" />
        <ButtonNum handleClick={handleClick} value="4" />
        <ButtonNum handleClick={handleClick} value="5" />
        <ButtonNum handleClick={handleClick} value="6" />
        <ButtonNum bg="bg-purple-500" handleClick={handleClick} value="+" />
        <ButtonNum handleClick={handleClick} value="1" />
        <ButtonNum handleClick={handleClick} value="2" />
        <ButtonNum handleClick={handleClick} value="3" />
        <ButtonNum bg="bg-purple-500" handleClick={handleClick} value="-" />
        <ButtonNum handleClick={handleClick} value="." />
        <ButtonNum handleClick={handleClick} value="0" />
        <ButtonNum
          handleClick={handleClick}
          bg="bg-red-600 text-[1.3rem] sm:text-[1.4rem] font-bold"
          value="DEL"
        />
        <ButtonNum bg="bg-purple-500" handleClick={handleClick} value="=" />
      </div>
      
    </div>
    <small className="capitalize font-lato text-center pt-4 block">developed by shipon islam</small>
    </div>
    
  );
}
