import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import bg from "/assets/images/testimonials_bg2.jpeg";
import p1 from "/assets/images/p1.jpg";
import p2 from "/assets/images/p2.jpg";
import p3 from "/assets/images/p3.jpg";
import p4 from "/assets/images/p4.jpg";
import { useTranslation } from "react-i18next"; // Import useTranslation

const FeedBack = () => {
  const { t } = useTranslation(); // Initialize translation function

  const feedbackList = [
    {
      image: p4,
      name: "Amina Omer",
      title: t("graphic_designer"),
      feedback: t("feedback4")
    },
    {
      image: p1,
      name: "Sarah Adam",
      title: t("web_designer"),
      feedback: t("feedback1")
    },
    {
      image: p2,
      name: "Sara Ali",
      title: t("marketing_manager"),
      feedback: t("feedback2")
    },
    {
      image: p3,
      name: "John Smith",
      title: t("customer"),
      feedback: t("feedback3")
    },
   
    {
      image: p1,
      name: "David Lee",
      title: t("coffee_lover"),
      feedback: t("feedback5")
    },
    {
      image: p2,
      name: "Layla Hassan",
      title: t("project_manager"),
      feedback: t("feedback6")
    },
    {
      image: p3,
      name: "Michael Brown",
      title: t("chef"),
      feedback: t("feedback7")
    }
  ];

  return (
    <section
      className="relative lg:py-40 py-10 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container m-auto text-center  h-full px-5  ">
        {/* Titles */}
        <div className="mb-12">
          <h3 className="text-2xl text-primary mb-4">
            {t("customer_feedback")} {/* Translated title */}
          </h3>
          <h2 className="text-4xl font-bold text-white">
            {t("what_clients_say")} {/* Translated subtitle */}
          </h2>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }}
          className="swiper-container  max-w-[1200px]"
        >
          {feedbackList.map((feedback, index) => (
            <SwiperSlide key={index} className="text-center ">
              <div className="relative p-8 bg-black h-96 bg-opacity-80 text-white">
                <img
                  src={feedback.image}
                  alt={`Client ${feedback.name}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
              
                <p className="text-lg italic mb-4">
                  {feedback.feedback} {/* Translated feedback */}
                </p>
                <h5 className="text-xl font-bold">
                  {feedback.name} <br />
                  <em className="text-primary">{feedback.title}</em>
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeedBack;
