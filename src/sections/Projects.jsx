import React, {useState, Suspense} from 'react';

import { myProjects } from '../constants/index.js';
import {Canvas} from '@react-three/fiber';
import {Center, OrbitControls} from '@react-three/drei';
import DemoComputer from '../components/DemoComputer.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';


const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex)=>{
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount -1 : prevIndex - 1;
            }
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

  return (
    <section className="c-space my-20" id="project">
        <p className="head-text">My Projects</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0">
                    <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
                </div>

                <div className="flex flex-col gap-5 text-white-600 my-5">
                    <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                    <p className="animatedText">{currentProject.desc}</p>
                    <p className="animatedText">{currentProject.subdesc}</p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-5">

                    <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank">
                        <p>Check Github</p>
                        <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                    </a> 
                </div>

                <div className="flex justify-bewteen items-center mt-7">
                    <button className="arrow-btn" onClick={()=>handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                    </button>

                    <button className="arrow-btn" onClick={()=>handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                    </button>
                </div>
            </div>

            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                <Canvas>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>
                            <group scale={2} position={[0,0,0]} rotation={[0, -0.1, 0]}>
                                <DemoComputer texture={currentProject.texture}/>
                            </group>
                        </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />
                </Canvas>

            </div>


        </div>
    </section>
  )
}

export default Projects