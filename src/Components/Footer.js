import React from 'react';
import { BsDiscord } from "react-icons/bs"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='bg-[#111]'>
            <div className=" items-center flex flex-col space-y-5 justify-center m-auto w-[85%] py-20">
                <div className="space-y-4">
                    <div className="">
                        <h1 className="font-semibold text-2xl">Stay in touch</h1>
                        <p className="">Subscribe to our email list to receive updates on platform features and general market tips</p>
                    </div>
                    <div className="my-3">
                        <form className="flex flex-col space-y-3">
                            <input type="email" className="p-3 rounded-lg text-black outline-none" placeholder='Email address' />
                            <button type='submit' className='bg-green-500 hover:bg-green-400 py-3 rounded-lg'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="m-auto w-[85%] space-y-1 xl:space-y-0 text-center">
                <div className="flex items-center xl:gap-5 gap-3 text-center py-3 justify-center">
                    <FaTwitter className="text-white xl:text-2xl" />
                    <BsDiscord className="text-white xl:text-2xl" />
                </div>

                <hr className="bg-green-500 h-[2px] xl:hidden" />
                <p className="text-white text-center uppercase font-bold pb-5">&copy;Fu<span className='text-green-500'>zzy</span></p>
            </div>
        </div>
    );
};

export default Footer;