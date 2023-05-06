import Coin from "./Coin";
import React, { useEffect, useState } from "react"
import coinGeko from "../pages/api/coinGeko"

function CoinList() {

    const [coins, setCoins] = useState([])
    useEffect(() => {
        const fetctData = async () => {
            const data = await coinGeko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin,ethereum,binance coin,cardano,tether,xpr,dogecoin"
                }
            }).then((res) => {
                setCoins(res.data)
                // console.log(res.data)
            })
        }
        fetctData()
    },[])
    
    return (
        <div className="coinList pt-10 pb-20">
            {coins.map((coin) => (
                <div>
                    <Coin
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                    image={coin.image}
                    market_cap_rank={coin.market_cap_rank}
                    price_change_percentage_24h={coin.price_change_percentage_24h}
                     />
                    <h2>Title</h2>
                </div>
            ))} 
        </div>
    )
}

export default CoinList

