import React from "react";

export default function Heading({ title,subTitle }) {
  return (
    <div  data-aos="fade-left" data-aos-duration="1000">
      <div className=" overflow-hidden capitalize font-bold font-poppins text-xl pl-1 w-[90%] md:w-[96%] mx-auto  border-b border-blue/75  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 mt-8">
        <div className="relative w-fit ">
          {title}
          <div className='text-blue relative inline border animate-pulse -right-[4.2rem] py-1 -top-1  rounded-2xl border-blue px-3 md:px-8 text-[8px] md:text-[12px] w-32  before:bg-blue before:w-16 before:h-[1px] before:-inset-16 before:top-1/2 before:absolute before:contents-[""]'>
            {subTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
//relative capitalize font-bold font-inter text-xl pl-6 md:text-center border-b border-blue/75  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 mt-8'
