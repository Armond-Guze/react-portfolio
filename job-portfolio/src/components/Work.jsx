import React from "react";
import WorkImg from "../assets/workImg.jpeg";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my work!</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="group-hover-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  React Js App
                </span>
                <div className="pt-3 text-center">
                  <a href="/"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Demo
                  </button>
                  <a href="/"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Code
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
            <div className="group-hover-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  React Js App
                </span>
                <div className="pt-3 text-center">
                  <a href="/"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Demo
                  </button>
                  <a href="/"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="group-hover-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  Trip Junkie
                </span>
                <div className="pt-3 text-center">
                  <a href="https://github.com/Armond-Guze/trip-junkie"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Demo
                  </button>
                  <a href="https://github.com/Armond-Guze/trip-junkie"></a>
                  <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold">
                    Code
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

// style={{backgroundImage: `url(${WorkImg})` }}

export default Work;
