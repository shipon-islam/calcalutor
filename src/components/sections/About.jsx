import React from "react";
import { BiMessageSquareCheck } from "react-icons/bi";
import { about } from "../../apis";
import Heading from "../Heading";
import Images from "../Images";

const ok = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 inline-block font-black"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default function About() {

  const {black_image,color_image,first_paragraph,second_paragraph,third_paragraph,technologies1,technologies2}=about;
  return (
    <div className="font-poppins">
      <Heading title="about me" subTitle="who iam?" />
      <div className="md:flex justify-between">
        <div data-aos="fade-right" data-aos-duration="1000" className="hidden md:block ">
          <Images image={black_image} />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className="block md:hidden  ml-6">
          <Images image={color_image} />
        </div>
        <aside data-aos="fade-left" data-aos-duration="1000" className=" w-[90%] md:w-[45%] sm:ml-auto lg:w-[55%] xl:w-[57%] 2xl:w[62%]  font-poppins mx-auto">
          <article >
            <p className="mt-12 md:mt-0  text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]">
             {first_paragraph}
            </p>
            <p className=" text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] mt-4 ">
              {second_paragraph}
            </p>
          </article>
          <div>
            <h5 className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]  mt-4 mb-2">
             {third_paragraph}
            </h5>
            <div className="flex ">              
              <ul>
                {technologies1.map((item,index)=>{
                return <li key={index} className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  {item}
                </li>})}                
              </ul>
              <ul className="ml-6">
              {technologies2.map((item,index)=>{
                return <li key={index} className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  {item}
                </li>})}  
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
