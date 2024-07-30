import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import Frontend from "../assets/frontend.png";
import TripJunkie from "../assets/tripjunkie.png"
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8 py-16">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my work!</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Frontend})` }}
            className="shadow-lg cursor-none shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="group-hover-100 cursor-default">
              <div>
                <span className="text-2xl m-4 font-bold text-white tracking-wider">
                  Frontend, Ecommerce
                </span>
                <div className="pt-3 text-center">
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    <a href="https://ecom-frontend-ag.netlify.app/">Demo</a>
                  </button>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    <a href="https://github.com/Armond-Guze/ecommerce-frontend">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="group-hover-100 cursor-default">
              <div>
                <span className="text-2xl m-4 font-bold text-white tracking-wider">
                  Carhub
                </span>
                <div className="pt-3 text-center">
                  <a href="https://hub4cars.netlify.app/"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Demo
                  </button>
                  <a href="https://github.com/Armond-Guze/carhub"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TripJunkie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            // dsf
          >
            {/* hover effects */}
            <div className="group-hover-100 cursor-default">
              <div>
                <span className="text-3xl m-4 font-bold text-white tracking-wider">
                  Trip Junkie
                </span>
                <div className="pt-3 text-center cursor-default">
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    <a href="https://trip-junkie-f71816465bac.herokuapp.com/">
                      Demo
                    </a>
                  </button>
                  
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    <a href="https://github.com/Armond-Guze/trip-junkie">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
