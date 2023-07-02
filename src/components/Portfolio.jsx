import React from 'react'
import movieLand from '../assets/portfolio/movieLand.png'
import todoList from '../assets/portfolio/todoList.png'
import wordSearch from '../assets/portfolio/wordSearch.png'
import reactPortfolio from '../assets/portfolio/reactPortfolio.png'
//import clubRegis from '../assets/portfolio/clubRegis.png'
import electricityWebsite from '../assets/portfolio/electricityWebsite.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: movieLand,
            href: "https://github.com/Ishikakash/MovieLand",
        },
        {
            id: 2,
            src: todoList,
            href: "https://github.com/Ishikakash/Capstone-Project",
        },
        {
            id: 3,
            src: reactPortfolio,
            href: "https://github.com/Ishikakash/Portfolio",
        },
        {
            id: 4,
            src: wordSearch,
            href: "https://github.com/Ishikakash/Word-guessing",
        },
        {
            id: 5,
            src: electricityWebsite,
            href: "https://github.com/Ishikakash/electricity",
        },
    ]; 

    return (
        <div
          name="portfolio"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="ml-5 text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
              <p className="py-6 ml-5">Check out some of my work</p>
            </div>
    
            <div className="ml-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, href }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button> */}
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={href}>Code</a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <br/> <br/> <br/> <br/> <br/>
          </div>
        </div>
      );
    };

export default Portfolio;