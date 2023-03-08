import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="m-auto w-[85%] py-5 flex items-center justify-between">
                <div className="">
                    <Link to="/">
                        <h1 className="font-bold text-md xl:text-xl md:text-md uppercase" >Street<span className='text-green-500'>Money</span></h1>
                    </Link>
                </div>
                <div className="">
                    {/* <Link to="/exchange"><h1 className="hidden xl:flex font-semibold text-lg tracking-wider hover:text-green-400 text-green-500"> <span className='text-white'>Ex</span>change</h1></Link> */}
                </div>
                <div className="">
                    <Link to = "/exchange">
                    <button className="bg-transparent hover:bg-green-500 border border-green-500 xl:px-8 xl:py-4 py-2 px-5 rounded-full">Connect</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;