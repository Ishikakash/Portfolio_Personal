import React from "react";

const About = () => {
    return (
        <div
          name="about"
          className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className=" ml-5 text-4xl font-bold inline border-b-4 border-gray-500">
                About
              </p>
            </div>
    
            <p className="text-xl mt-20 ml-5">
                Welcome to my portfolio! I'm a passionate front-end developer dedicated to creating engaging 
                and interactive web experiences. With a strong foundation in HTML, CSS, and JavaScript, 
                I specialize in translating design concepts into pixel-perfect, responsive websites. 
                I thrive on the challenge of crafting intuitive user interfaces that not only look 
                visually appealing but also deliver seamless functionality.
            </p>
    
            <br />
    
            <p className="text-xl ml-5">
                Leveraging my creativity and attention to detail, I aim to build user-centric websites that 
                leave a lasting impression. Continuously staying up to date with the latest industry trends 
                and technologies, I am committed to delivering cutting-edge solutions that enhance 
                user experiences. Let's collaborate and bring your vision to life on the web!
            </p>
            <br/> <br/> <br/> <br/>
          </div>
        </div>
      );
}

export default About;

// ms auto -> center 