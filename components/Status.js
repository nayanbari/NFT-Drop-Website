import Image from 'next/image'
import GraphIcon from '../assets/Icon/Bar_Chart.png'
import Earth from '../assets/Icon/Earth.png'
import Person from '../assets/Icon/Person.png'

function Status() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-dark-color px-20 ">
            <div className="card w-[280px] flex space-x-5 items-center mx-auto pb-10">
                <div className="icon relative flex items-center justify-center w-[80px] h-[80px] bg-white bg-opacity-10 rounded-full">
                    <Image src={GraphIcon} className="w-[40px] h-[40px]" objectFit="contain" />
                </div>
                <div className="info">
                    <h2 className="text-5xl font-bold text-white">$30B</h2>
                    <p className="text-sm text-gray-color-100 pt-4">Digital Currency Exchanged</p>
                </div>
            </div>
            <div className="card w-[280px] flex space-x-5 items-center mx-auto pb-10">
                <div className="icon relative flex items-center justify-center w-[80px] h-[80px] bg-white bg-opacity-10 rounded-full">
                    <Image src={Person} className="w-[40px] h-[40px]" objectFit="contain" />
                </div>
                <div className="info">
                    <h2 className="text-5xl font-bold text-white">10M+</h2>
                    <p className="text-sm text-gray-color-100 pt-4">Trusted Wallets Investor</p>
                </div>
            </div>
            <div className="card w-[280px] flex space-x-5 items-center mx-auto pb-10">
                <div className="icon relative flex items-center justify-center w-[80px] h-[80px] bg-white bg-opacity-10 rounded-full">
                    <Image src={Earth} className="w-[40px] h-[40px]" objectFit="contain" />
                </div>
                <div className="info">
                    <h2 className="text-5xl font-bold text-white">195</h2>
                    <p className="text-sm text-gray-color-100 pt-4">Countries Supported</p>
                </div>
            </div>
        </div>
    )
}

export default Status
