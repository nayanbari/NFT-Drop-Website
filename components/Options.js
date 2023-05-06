import Image from 'next/image';
import Arrow from '../assets/arrow.png'
import Bitcoin from '../assets/Icon/Bitcoin.png'
import Litecoin from '../assets/Icon/Litecoin.png'
import Ethereum from '../assets/Icon/Ethereum.png'

function Options() {
    return (
        <div className="relative mt-40 px-20">
            <h2 className="text-6xl text-center font-bold leading-snug text-dark-color mt-10 pt-5">Trade securely and market the high <br /> growth cryptocurrencies.</h2>
            <div className="cards flex items-center flex-wrap">
                <div className="card mb-10 mt-20 mx-auto flex flex-col space-y-10 p-8 w-[370px] text-center shadow-lg rounded-2xl group hover:bg-blue-color-500 transition duration-150 ease-out">
                    <Image src={Bitcoin} className="w-[80px] h-[80px]" objectFit="contain" />
                    <h3 className="text-3xl font-bold group-hover:text-white transition duration-100">
                        Bitcoin <span className="text-xl font-semibold text-gray-color-300">BTC</span>
                    </h3>
                    <p className="text-lg font-normal text-gray-color-500 group-hover:text-white transition duration-100">Digital currency in which a record of transactions is maintained.</p>
                    <button className="group flex text-xl font-semibold text-white p-5 bg-blue-color rounded-full w-max mx-auto transition duration-150 active:scale-110">Start Mining 
                        <div className="relative w-[32px] h-[32px] bg-white rounded-full ml-4 group-hover:ml-6 trasition duration-100 ease-in-out">
                            <Image src={Arrow} objectFit="contain"/>
                        </div>
                    </button>
                </div>
                <div className="card mb-10 mt-20 mx-auto flex flex-col space-y-10 p-8 w-[370px] text-center shadow-lg rounded-2xl group hover:bg-blue-color-500 transition duration-150 ease-out">
                    <Image src={Ethereum} className="w-[80px] h-[80px]" objectFit="contain" />
                    <h3 className="text-3xl font-bold group-hover:text-white transition duration-100">
                        Ethereum <span className="text-xl font-semibold text-gray-color-300">ETH</span>
                    </h3>
                    <p className="text-lg font-normal text-gray-color-500 group-hover:text-white transition duration-100">Blockchain technology to create and run decentralized digital applications.</p>
                    <button className="group flex text-xl font-semibold text-white p-5 bg-blue-color rounded-full w-max mx-auto transition duration-150 active:scale-110">Start Mining 
                        <div className="relative w-[32px] h-[32px] bg-white rounded-full ml-4 group-hover:ml-6 trasition duration-100 ease-in-out">
                            <Image src={Arrow} objectFit="contain"/>
                        </div>
                    </button>
                </div>
                <div className="card mb-10 mt-20 mx-auto flex flex-col space-y-10 p-8 w-[370px] text-center shadow-lg rounded-2xl group hover:bg-blue-color-500 transition duration-150 ease-out">
                    <Image src={Litecoin} className="w-[80px] h-[80px]" objectFit="contain" />
                    <h3 className="text-3xl font-bold group-hover:text-white transition duration-100">
                        Litecoin <span className="text-xl font-semibold text-gray-color-300">LTC</span>
                    </h3>
                    <p className="text-lg font-normal text-gray-color-500 group-hover:text-white transition duration-100">Cryptocurrency that enables instant payments to anyone in the world.</p>
                    <button className="group flex text-xl font-semibold text-white p-5 bg-blue-color rounded-full w-max mx-auto transition duration-150 active:scale-110">Start Mining 
                        <div className="relative w-[32px] h-[32px] bg-white rounded-full ml-4 group-hover:ml-6 trasition duration-100 ease-in-out">
                            <Image src={Arrow} objectFit="contain"/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Options
