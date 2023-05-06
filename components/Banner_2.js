import Image from 'next/image';
import Illustration_2 from '../assets/illustration-2.png'

function Banner_2() {
    return (
        <div className="banner_2 flex justify-between bg-dark-color px-20">
            <div className="hidden lg:inline-flex relative h-[600px] w-[600px] mt-16">
                <Image src={Illustration_2} layout="fill" objectFit="contain" />
            </div>
            <div className="hero-text mt-16">
                <h2 className="text-6xl font-bold leading-snug text-white mt-10">Why you should choose <br /> YAKSHARAT</h2>
                <p className="text-lg font-normal text-gray-color-100 mt-10">Experience the next generation cryptocurrency <br /> platform. No financial borders, extra fees, and fake <br /> reviews.</p>
                <button className="group flex text-xl font-semibold text-white p-5 mt-10 bg-blue-color rounded-full hover:scale-105 transition duration-150 active:scale-110">Learn More</button>
            </div>
        </div>
    )
}

export default Banner_2
