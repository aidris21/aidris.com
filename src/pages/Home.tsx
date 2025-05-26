import React from 'react';
import profile_img from '../images/amiridris.jpeg'
import foreground from '../images/skyline.svg'
import SocialLinks from '../components/SocialLinks'

export const Home: React.FC = () => {
    return ( 
        <div className="min-h-screen w-full bg-black overflow-hidden">
            <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden perspective-10 bg-gradient-to-b from-[rgb(167,194,230)] via-[#6a92de] to-black">
                <header className="relative flex flex-col justify-center items-center h-screen preserve-3d -z-10">
                    <div className="mb-8 z-10">
                        <img 
                            src={profile_img} 
                            alt="Profile" 
                            className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                    <img src={foreground} alt="City Skyline" className="absolute inset-0 h-full w-full object-cover -z-10 transform scale-150 opacity-90"></img>
                    <h1 className="text-7xl bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text tracking-tight z-10">Amir Idris</h1>
                </header>
                <SocialLinks />
            </div>
        </div>
    )
}