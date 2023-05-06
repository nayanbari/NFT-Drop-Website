import Image from 'next/image';
import Arrow from '../assets/arrow.png'
import Bitcoin from '../assets/Icon/Bitcoin.png'
import Litecoin from '../assets/Icon/Litecoin.png'
import Ethereum from '../assets/Icon/Ethereum.png'

function Coin({id, name, symbol, image, market_cap_rank, price_change_percentage_24h}) {
    return (
        <div className="flex items-center justify-around bg-white px-5 py-10 rounded-2xl mx-auto mb-10 max-w-[768px]">
            <div className="realative w-[40px] h-[40px]">
                <img src={image} objectFit="contain" />
            </div>
            <h3 className="name text-2xl font-bold text-dark-color">{name}</h3>
            <h4 className="percentageChange text-lg font-semibold text-grey-500">{price_change_percentage_24h}%</h4>
            <button className="text-sm text-white bg-blue-color px-5 py-2 rounded-full cursor-pointer hover:scale-105 transition duration-150 active:scale-110">Details</button>
        </div>
        
    )
}

export default Coin
