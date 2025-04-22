import React from 'react';
import background_img from '../images/amiridris.jpeg'
import foreground from '../images/skyline.svg'
import SocialLinks from './SocialLinks'

export const Home: React.FC = () => {
    return ( 
        <div className="min-h-screen w-full bg-black overflow-hidden">
            <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden perspective-10 bg-gradient-to-b from-[#000B1A] via-[#001233] to-black">
                <header className="relative flex flex-col justify-center items-center h-screen preserve-3d -z-10">
                    <div className="mb-8 z-10">
                        <img 
                            src={background_img} 
                            alt="Profile" 
                            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                    <img src={foreground} className="absolute inset-0 h-full w-full object-cover -z-10 transform scale-150 opacity-90"></img>
                    <h1 className="text-7xl text-white shadow-text z-10">Let's do this one last time...</h1>
                </header>
                <SocialLinks />
            </div>
        </div>
    )
}