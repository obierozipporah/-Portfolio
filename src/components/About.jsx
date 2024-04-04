import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Currently, I'm in my third year working towards a Bachelor's degree in Mathematics and Computer Science at Multimedia University. My goal is to become a proficient Full Stack Developer. Most of my experience lies in frontend development, where I've polished my abilities using technologies such as Javascript, React.js, and Tailwind CSS to create visually appealing and highly functional interfaces. With my diverse skill set and eagerness to expand my knowledge, I believe I can offer valuable contributions to any team. Please don't hesitate to reach out if you're interested in exploring how I can support your projects.


        </p>

        <br />

        <p className="text-xl">
        Let's team up and create something exceptional together!
        </p>
      </div>
    </div>
  );
};

export default About;
