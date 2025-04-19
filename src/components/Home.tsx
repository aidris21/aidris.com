import React from 'react';
import background_img from '../images/amiridris.jpeg'
import foreground from '../images/skyline.svg'

export const Home: React.FC = () => {
    return ( 
        <div className="h-screen overflow-y-auto overflow-x-hidden perspective-10">
            <header className="relative flex justify-center items-center h-full preserve-3d -z-10">
                <img src={foreground} className="absolute h-full w-full object-cover -z-10 transform translate-z-neg-5 scale-150"></img>
                <h1 className="text-7xl text-white shadow-text">Let's do this one last time...</h1>
            </header>
            <section className="text-2xl p-8 bg-gray-800 text-white">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
            </section>
        </div>
    )
}