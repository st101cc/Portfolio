import React from 'react';
import {Canvas} from "@react-three/fiber";
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useControls} from "leva";
import { useMediaQuery } from 'react-responsive';


import CanvasLoader from '../components/CanvasLoader.jsx';
import HackerRoom from '../components/HackerRoom.jsx';
import { calculateSizes } from '../constants/index.js';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';



const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative space-y-4">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-2xl text-xl font-medium text-white text-center font-opensans">Cherrie Chen</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <HeroCamera isMobile={isMobile}>
                    <HackerRoom 
                        position={sizes.deskPosition} 
                        rotation={[0, 0, 0]}
                        scale={sizes.deskScale}
                    />
                    </HeroCamera>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                </Suspense>
            </Canvas>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
                <Button name="More about me" containerClass="sm:w-fit w-full sm:min-w-96"/>
            </a>
        </div>
    </section>
  )
}

export default Hero