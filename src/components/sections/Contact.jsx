import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button";
import ContactSvg from "../ContactSvg";
import Heading from "../Heading";
import Spin from "../Spin";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

export default function Contact() {
  const [loading, setloading] = useState(false);
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setuserDetails({ ...userDetails, [name]: value });
  };


  //send message from user to admin
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = userDetails;
    if (!name || !email || !message) {
      return toast.warn("fill & try again!");
    }
    buttonRef.current.disabled = true;
    setloading(true);
    const mail = await emailjs.send(
      "service_vs3351g",
      "template_8vdc61f",
      userDetails,
      "user_0NEpiHFRwUkFLNiJNBPi0"
    );

    if (mail) {
      setuserDetails({
        name: "",
        email: "",
        message: "",
      });
      setloading(false);
      buttonRef.current.disabled = false;
      toast.success("Message sent successfuly ✔");
    }
  };
 
  return (
    <div className="font-poppins">
      <ToastContainer />

      <Heading title="contact me" subTitle="how to meet?" />
      <div className="flex flex-col md:flex-row ">
        <div data-aos="fade-right" data-aos-duration="1000" className="py-10">
          <ContactSvg />
        </div>
        <form
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-[85%] xl:w-[380px] xl:mt-8 md:w-[300px] mx-auto md:mx-0 md:ml-auto"
        >
          <TextInput
            onChange={handleChange}
            value={userDetails.name}
            label="name"
          />
          <TextInput
            type="email"
            onChange={handleChange}
            value={userDetails.email}
            label="email"
            my="my-6"
          />

          <TextArea
            label="message"
            onChange={handleChange}
            value={userDetails.message}
          />
          <Button
            ref={buttonRef}
            name={
              loading ? (
                <Spin/>
              ) : (
                "send"
              )
            }
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
