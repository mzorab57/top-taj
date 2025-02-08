import React from 'react'
import { Link } from 'react-router-dom'
import about from "/assets/img/bg-about.jpg";


const AboutTop = () => {
  return (
    <section className="navigation">
        <div className="relative ">
          <img
            src={about}
            alt="background"
            className="object-cover h-[580px] w-full brightness-50"
          />
          {/* Container for the text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/50 via-transparent to-transparent">
            <h2 className="text-3xl lg:text-4xl text-white  px-2 font-bold font-poppins">
              About us
            </h2>
            <ul className="flex justify-center space-x-2 text-gray-300 mt-4">
              <li>
                <Link to="/" className="text-yellow-500 text-xl font-poppins font-semibold">
                  Home
                </Link>
              </li>
              <li className="text-yellow-500 text-xl font-poppins font-semibold">
                / About Us
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default AboutTop
