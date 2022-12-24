import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { client_reviews } from "../../apis";
import CustomDot from "../CustomDot";
import Heading from "../Heading";
import ReviewCard from "../ReviewCard";
import ReviewCounter from "../ReviewCounter";



export default function Testimonials() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="font-inter">
      <Heading title="client reviews" subTitle="mind say?" />
      <div data-aos="fade-right" data-aos-duration="1000" className="my-14">
        <Carousel
          swipeable={window.innerWidth <= "600" ? true : false}
          draggable={window.innerWidth <= "600" ? true : false}
          showDots={true}
          responsive={responsive}
          // means to render carousel on server-side.
          infinite={true}
          autoPlay={window.innerWidth >= "600" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          customDot={<CustomDot/>
          }
       
          itemClass="carousel-item-padding-60-px"
        >
          {client_reviews.map((review) => (
            <React.Fragment key={review.id}>
              <ReviewCard {...review} />
            </React.Fragment>
          ))}
        </Carousel>
      </div>
      <ReviewCounter/>
    </div>
  );
}
