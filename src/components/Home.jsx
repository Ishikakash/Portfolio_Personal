import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import a from '../assets/a(1).png';

import d from '../assets/d.png'

const Home = () => {

    const [over, setOver] = useState(false);

  return (
    <div name="home"
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl ml-5 sm:text-7xl font-bold text-white">
                    I'm a Front End Developer
                </h2>
                <p className="text-gray-500 ml-5 py-4 max-w-md">
                    I have 2+ years of experience building and designing websites.
                    Currently, I love to work on web application using 
                    technologies like
                    Html, CSS, Javascript and React.
                </p>
                <div>
                <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group text-white ml-5 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight size={25} className="ml-1" />
                </span>
                </Link>
            </div>
        </div>

            <div onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} >
                <img
                    src={over ? d : a}
                    alt="arrow"
                    className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
            </div>
        </div>
    </div>
  )
}

export default Home;