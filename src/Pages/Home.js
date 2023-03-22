import React from 'react';
import Card from '../Components/Card';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <div>
         
            <div className="w-[85%] m-auto ">
                <div className="flex flex-col xl:h-[85vh] md:h-[50vh] h-[85vh] justify-center items-center">
                    <div className='space-y-6 text-center'>
                        <h1 className="xl:text-8xl text-5xl uppercase font-bold">The Act Of Social <br /> Trading</h1>
                        <p className="xl:w-[70%] m-auto tracking-wider">Fuzzy is a peer-to-peer stage designed to enable free direct currency exchange and borderless transfer</p>
                        <button className="bg-transparent hover:bg-green-500 border border-green-500 xl:px-8 xl:py-4 py-3 px-5 rounded-full">Get Started</button>
                    </div>
                </div>
                    <div className="">
                        <Card />
                    </div>
                    <div className="my-20">
                        <Features/>
                    </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;