import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gird-cols-2 gap-8">
          <div className="sm:text-right b pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid gird-cols-2 gap-8">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi, I'm Armond nice to meet you</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro ab recusandae voluptas quam minus blanditiis earum, saepe deleniti quas facere reprehenderit sit ipsum natus fugit necessitatibus, sed voluptatum repudiandae.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
