import React, { useEffect, useState } from 'react';
import { TbArrowsSort } from "react-icons/tb"
const Exchange = () => {
    const [swap, setSwap] = useState(true)
    const [buysell, setBuysell] = useState(false)

    function handleSwap() {
        setSwap(true)
        setBuysell(false)
    }

    function handleBuy() {
        setSwap(false)
        setBuysell(true)
    }

    return (
        <div className='h-[85vh]'>
            <div className="flex flex-col justify-center items-center h-[85vh] m-auto w-[85%]">
                <div className="bg-[#111] border rounded-2xl border-green-500 m-auto xl:w-[40%] md:w-[85%] w-[100%]">
                    <div className="py-5 bg-[#444] rounded-2xl">
                        <div className="flex items-center  justify-between xl:w-[80%] w-[85%] m-auto">
                            <div className="cursor-pointer">
                                <h1 className={swap ? " bg-green-500 xl:px-10 px-4 py-2 rounded-full" : "xl:px-10 px-4 py-2"} onClick={handleSwap}>Swap</h1>
                            </div>
                            <div className="cursor-pointer">
                                <h1 className={buysell ? " bg-green-500 xl:px-10 px-4 py-2 rounded-full" : "xl:px-10 px-4 py-2"} onClick={handleBuy} >Buy/sell</h1>
                            </div>
                        </div>
                    </div>

                    {swap && <div className="py-10">
                        <div className="flex flex-col items-center  justify-between space-y-10">
                            <div className="xl:w-[80%] w-[85%]">
                                <div className="flex items-center  justify-between ">
                                    <div className="">
                                        <p className="">You Send</p>
                                    </div>
                                    <div className="">
                                        <p className="">Balance: 40 ETH</p>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <div className="bg-white rounded-full px-5">
                                        <div className="flex items-center">
                                            <div className="">
                                                <input type="text" className="py-4 outline-none  rounded-xl w-[100%] text-black" placeholder='0.0' />
                                            </div>
                                            <div className="flex justify-end w-[100%]">
                                                <p className="text-black">ETH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <TbArrowsSort className="text-4xl bg-green-500 p-2 rounded-full" />
                            </div>

                            <div className="  xl:w-[80%] w-[85%]">
                                <div className="">
                                    <p className="">You Get</p>
                                </div>
                                <div className="py-3">
                                    <div className="bg-white rounded-full px-5">
                                        <div className="flex items-center">
                                            <div className="">
                                                <input type="text" className="py-4 outline-none  rounded-xl w-[100%] text-black" placeholder='0.0' />
                                            </div>
                                            <div className="flex justify-end w-[100%] ">
                                                <p className="text-black">BTC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <button className="hover:bg-green-400 bg-green-500 border border-green-500 xl:px-12 xl:py-4 py-3 px-6 rounded-full">Swap Now</button>
                            </div>
                        </div>
                    </div>}


                    {buysell && <div className="py-10">
                        <div className="flex flex-col items-center  justify-between space-y-10">
                            <div className="xl:w-[80%] w-[85%]">
                                <div className="flex items-center  justify-between ">
                                    <div className="">
                                        <p className="">You Send</p>
                                    </div>
                                    <div className="">
                                        <p className="">Balance: 40 ETH</p>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <div className="bg-white rounded-full px-5">
                                        <div className="flex items-center">
                                            <div className="">
                                                <input type="text" className="py-4 outline-none  rounded-xl w-[100%] text-black" placeholder='0.0' />
                                            </div>
                                            <div className="flex justify-end w-[100%]">
                                                <p className="text-black">ETH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <TbArrowsSort className="text-4xl bg-green-500 p-2 rounded-full" />
                            </div>

                            <div className="  xl:w-[80%] w-[85%]">
                                <div className="">
                                    <p className="">You Get</p>
                                </div>
                                <div className="py-3">
                                    <div className="bg-white rounded-full px-5">
                                        <div className="flex items-center">
                                            <div className="">
                                                <input type="text" className="py-4 outline-none  rounded-xl w-[100%] text-black" placeholder='0.0' />
                                            </div>
                                            <div className="flex justify-end w-[100%] ">
                                                <p className="text-black">BTC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <button className="hover:bg-green-400 bg-green-500 border border-green-500 xl:px-12 xl:py-4 py-3 px-6 rounded-full">Buy/Sell Now</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div >
        </div >
    );
};

export default Exchange;