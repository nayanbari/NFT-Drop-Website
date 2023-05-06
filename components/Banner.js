import Image from 'next/image';
import Illustration_1 from '../assets/illustration-1.png'
import Arrow from '../assets/arrow.png'
import Link from 'next/link'

function Banner() {
    return (
        <div className="banner h-screen flex justify-between bg-dark-color px-20">
            <div className="hero-text mt-16">
                <h3 className="w-[400px] text-lg font-semibold px-5 py-2 bg-dark-color-300 text-white rounded-full"><span className="px-2 py-1 mr-2  bg-white rounded-full text-dark-color">75% SAVE</span>For the Black Friday weekend</h3>
                <h1 className="text-8xl font-bold leading-snug text-white mt-10">Fastest & secure <br /> platform to invest <br /> in crypto</h1>
                <p className="text-lg font-normal text-gray-color-100 mt-10">Buy and sell cryptocurrencies, trusted by 10M wallets <br /> with over $30 billion in transactions.</p>
                <Link href="/coins">
                <button className="group flex text-xl font-semibold text-white p-5 mt-10 bg-blue-color rounded-full transition duration-150 active:scale-110">Try for FREE 
                    <div className="relative w-[32px] h-[32px] bg-white rounded-full ml-4 group-hover:ml-6 trasition duration-100 ease-in-out">
                        <Image src={Arrow} objectFit="contain"/>
                    </div>
                </button>

                </Link>
            </div>
            <div className="hidden lg:inline-flex relative h-[600px] w-[600px] mt-16">
                <Image src={Illustration_1} layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Banner
