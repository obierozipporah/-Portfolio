import React from "react";
import Audiophile from "../assets/Audiophile App.png";
import CountriesApp from "../assets/CountriesApp.png";
import GitUserApp from "../assets/GitUserApp.png";
import TodoApp from "../assets/TodoApp.png";
import PortfolioApp from "../assets/PortfolioApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Audiophile,
      demoLink: "https://audiophile-ecommerce-project-delta.vercel.app/",
      codeLink: "https://github.com/obierozipporah/Audiophile-Ecommerce-Project.git",
    },
    {
      id: 2,
      src: CountriesApp,
      demoLink: "https://countries-application-one.vercel.app/",
      codeLink: "https://github.com/obierozipporah/REST-COUNTRY.git",
    },
    {
      id: 3,
      src: GitUserApp,
      demoLink: "https://github-user-search-app-ten-pearl.vercel.app/",
      codeLink: "https://github.com/obierozipporah/SEARCH-APP.git",
    },
    {
      id: 4,
      src: TodoApp,
      demoLink: "https://todo-application-iota-topaz.vercel.app/",
      codeLink: "https://github.com/obierozipporah/ToDo-App.git",
    },
    {
      id: 5,
      src: PortfolioApp,
      demoLink: "https://harmonious-biscotti-3b469a.netlify.app/",
      codeLink: "https://github.com/obierozipporah/PORTFOLIO.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
