"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Judge {
  id: number;
  name: string;
  achievements: string[];
  funFact: string;
  image: string;
}

const judges: Judge[] = [
  {
    id: 1,
    name: "Sohalia Ali",
    achievements: [
      "9x Hackathon Judge",
      "3x Hackathon Winner",
      "3x Case Competition Winner",
      "6x Tech Speaker",
    ],
    funFact: "I recently went to a beautiful water lantern festival!",
    image: "/assets/sohalia_ali.png",
  },
  {
    id: 2,
    name: "Glen Yu",
    achievements: [
      "Principal Consultant, Head of AI & Google Developer Expert",
    ],
    funFact:
      "I spend my days in the cloud, but I live for the tactile: manual gearboxes, mechanical watches, and real paper books.",
    image: "/assets/glen_yu.png",
  },
  {
    id: 3,
    name: "Mohsin Raza",
    achievements: ["Staff Cloud Platform Engineer & Google Developer Expert"],
    funFact:
      "I started my career scripting in Perl and PHP, which is the digital equivalent of knowing how to drive a manual transmission in a world of self-driving cars.",
    image: "/assets/mohsin_raza.png",
  },
  {
    id: 4,
    name: "Xavier Chanthavong",
    achievements: ["Product GTM Advisor & Software Consultant"],
    funFact:
      "I got into climbing last year, and it became my new favorite sport immediately.",
    image: "/assets/xavier_chanthavong.png",
  },
];

function Judges() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-10 md:py-20 px-4"
      id="judges"
    >
      <div className="text-center mb-10 md:mb-16 flex flex-col items-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold gradient-text mb-4">
          JUDGES
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Meet the industry experts who will evaluate your projects and provide
          invaluable feedback
        </p>
      </div>
      <div className="w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="judges-swiper"
        >
          {judges.map((judge) => (
            <SwiperSlide key={judge.id} className="judge-slide">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-8 bg-surface rounded-2xl gradient-border min-h-100">
                <div className="shrink-0 w-full md:w-auto flex justify-center">
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-full md:w-auto md:h-80 object-cover"
                  />
                </div>
                <div className="flex-1 text-left w-full">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                    {judge.name}
                  </h2>
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-400 mb-2">
                      Achievements:
                    </h3>
                    <ul className="space-y-1 md:space-y-2">
                      {judge.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-sm md:text-base text-gray-300 flex items-start"
                        >
                          <span className="gradient-text mr-2 font-bold">
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 md:mt-4 p-3 bg-black/30 rounded-lg border-l-4 border-[#4285f4]">
                    <p className="text-xs md:text-sm font-semibold text-gray-400 mb-1">
                      Fun Fact:
                    </p>
                    <p className="text-sm md:text-base text-gray-300 italic">
                      {judge.funFact}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .judges-swiper {
          width: 100%;
          padding: 50px 0;
        }

        .judge-slide {
          background-position: center;
          background-size: cover;
          width: 90%;
          max-width: 900px;
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background-image: none;
        }

        .judges-swiper .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
        }

        .judges-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(
            135deg,
            #ea4335,
            #f9ab00,
            #4285f4,
            #34a853
          );
        }

        .judges-swiper .swiper-button-next,
        .judges-swiper .swiper-button-prev {
          color: #fff;
        }

        .judges-swiper .swiper-button-next:after,
        .judges-swiper .swiper-button-prev:after {
          font-size: 30px;
        }

        @media (max-width: 768px) {
          .judge-slide {
            width: 95%;
          }
        }
      `}</style>
    </section>
  );
}

export default Judges;
