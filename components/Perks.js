import Image from 'next/image';
import Chart from '../assets/Chart.png'
import Statistic from '../assets/Statistic.png'
import Table from '../assets/Table.png'

function Perks() {
    return (
        <div className="bg-blue-color-500 px-20 flex flex-col items-center space-y-32">
            <h2 className="text-6xl font-bold leading-snug text-white mt-10 text-center mx-auto pt-20">Market sentiments, portfolio, and run <br /> the infrastructure of your choice</h2>
            <section className="flex w-full justify-between mt-20">
                <div className="info mx-auto lg:mx-10 max-w-lg">
                    <h3 className="text-4xl text-white font-bold pt-20">Invest Smart</h3>
                    <p className="pt-10 text-lg font-normal text-gray-color-100 ">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                    <button className="mt-10 text-xl font-semibold text-white py-5 px-8 bg-blue-color rounded-full hover:scale-105 transition duration-150 active:scale-110">Learn More</button>
                </div>
                <div className="hidden lg:flex relative flex-grow mx-10 justify-center">
                    <Image src={Chart}  objectFit="contain" objectPosition="right"/>
                </div>
            </section>
            <section className="flex w-full justify-between mt-20">
                <div className="hidden lg:inline-flex relative flex-grow mx-10">
                    <Image src={Statistic} objectFit="contain" objectPosition="left" />
                </div>
                <div className="info mx-auto lg:mx-10 max-w-lg">
                    <h3 className="text-4xl text-white font-bold pt-20">Detailed Statistics</h3>
                    <p className="pt-10 text-lg font-normal text-gray-color-100 ">View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. </p>
                    <button className="mt-10 text-xl font-semibold text-white py-5 px-8 bg-blue-color rounded-full hover:scale-105 transition duration-150 active:scale-110">Learn More</button>
                </div>
            </section>
            <section className="flex w-full justify-between mt-20 pb-10">
                <div className="info mx-auto lg:mx-10 max-w-lg">
                    <h3 className="text-4xl text-white font-bold pt-20">Grow your profit and track your investments</h3>
                    <p className="pt-10 text-lg font-normal text-gray-color-100 ">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments. </p>
                    <button className="mt-10 text-xl font-semibold text-white py-5 px-8 bg-blue-color rounded-full hover:scale-105 transition duration-150 active:scale-110">Learn More</button>
                </div>
                <div className="hidden lg:inline-flex relative flex-grow mx-10">
                    <Image src={Table}  objectFit="contain" objectPosition="right" />
                </div>
            </section>
        </div>
    )
}

export default Perks
