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
        I am currently in my 2nd semester pursuing a Bachelor's degree in Mathematics and  Computer Science from Multimedia University. With a keen aspiration to become a Full Stack Developer. My experience primarily lies in frontend development, where I have honed my skills in technologies such as Javascript, React.js and Tailwind CSS to craft visually appealing and highly functional user interfaces. With my versatile skill set and eagerness to learn and grow, I am confident that I can be a valuable asset to any team. Feel free to get in touch to explore how I can contribute to your projects.


        </p>

        <br />

        <p className="text-xl">
        Let's collaborate and build something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
