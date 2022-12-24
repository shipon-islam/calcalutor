import React, { forwardRef } from "react";

const Button=forwardRef(({ name, ...rest },ref)=>{
  return (
    <button
      {...rest}
      ref={ref}
      className="bg-blue block w-full
            disabled:bg-slate-600/40 disabled:text-blue/50 disabled:hover:shadow-none  font-2xl uppercase font-bold text-slate-900 py-3 mt-8 rounded-lg hover:contact-btn "
    >
      {name}
    </button>
  );
})

export default Button;
