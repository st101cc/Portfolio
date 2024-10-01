import React, { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('cherrietenmore@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        }, 2000)
    }

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            {/* My Introduction */}
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-[200px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Hi, I'm Cherrie</p>
                        <p className="grid-subtext">An aspiring data scientist and software engineer studying data science at the London School of Economics and Political Science. </p>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[450px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">My Tech Stack</p>
                        <p className="grid-subtext">I specialize in Python and R. I am proficient in data scraping, data cleaning, and data analysis. </p>
                    </div>
                </div>
            </div>

            {/* My Location */}
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center">
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">My Location</p>
                        <p className="grid-subtext">I come from Taipei, Taiwan but I am currently located in London, United Kingdom. </p>
                    </div>
                </div>
            </div>

            {/* My Passion for Coding */}
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-subtext">I love to do work that make an impact to the world and analyze data that provide valuable insight into business performance.</p>
                    </div>
                </div>
            </div>

            {/* My Hobbies */}
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[226px] sm:h-[266px] h-fit object-contain sm:object-top"/>
                    <div>
                        <p className="grid-headtext">My Hobbies</p>
                        <p className="grid-subtext">I'm a big fan of detective novels and anime. I also enjoy swimming and playing violin during my free time. </p>
                    </div>
                </div>
            </div>

            {/* My Contact */}
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid5.png" alt="grid-5" className="w-full md:h-[226px] sm:h-[266px] h-fit object-contain sm:object-top"/>
                    <div>
                        <p className="grid-headtext">My Contact</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-l font-medium text-gray_gradient text-white">cherrietenmore@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About