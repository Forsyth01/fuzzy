import React from 'react';
import {TbArrowsExchange} from "react-icons/tb"
import {MdOutlinePeopleAlt} from "react-icons/md"
import {TfiGift} from "react-icons/tfi"

const Card = () => {
    return (
        <div className=''>
            <div className="text-center space-y-1 py-16">
                <h1 className="xl:text-6xl text-4xl">P2P Market<span className='cursor-pointer px-3 text-white bg-green-500'>place</span></h1>
                <p className="font-light md:text-md text-sm">Buy/Sell Dollar and get paid into any account.</p>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-5 md:space-y-0 gap-5">
                <div className="bg-transparent border border-green-500 hover:bg-green-800 cursor-pointer h-[20vh flex flex-col justify-center p-10 rounded-xl">
                    <div className="icon py-4">
                        <TbArrowsExchange className="text-3xl text-white"/>
                    </div>
                    <div className="space-y-2">
                        <div className="card-title">
                            <h1 className="">Flexible Transfer</h1>
                        </div>
                        <div className="card-body">
                            <p className="">Swap and receive money into any delivery account as soon as you need to. No queuing or extra paperworks</p>
                        </div>
                    </div>
                </div>
                <div className="bg-transparent border border-green-500 hover:bg-green-800 cursor-pointer h-[20vh  flex flex-col justify-center p-10 rounded-xl">
                    <div className="icon py-4">
                        <TfiGift className="text-3xl text-white"/>
                    </div>
                    <div className="space-y-2">
                        <div className="card-title">
                            <h1 className="">Unbeatable Rates</h1>
                        </div>
                        <div className="card-body">
                            <p className="">Exchange money at the rate of your best bargain. No middle or additional charges</p>
                        </div>
                    </div>
                </div>
                <div className="bg-transparent border border-green-500 hover:bg-green-800 cursor-pointer h-[20vh  flex flex-col justify-center p-10 rounded-xl">
                    <div className="icon py-4">
                        <MdOutlinePeopleAlt className="text-3xl text-white"/>
                    </div>
                    <div className="space-y-2">
                        <div className="card-title">
                            <h1 className="">Community driven</h1>
                        </div>
                        <div className="card-body">
                            <p className="">Build to serve home-diaspora exchanges, foreign deliverables, and other in-demand needs of our fast growing ecosystem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;