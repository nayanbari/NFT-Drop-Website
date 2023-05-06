import Coin from "../components/Coin";
import Navigation from "../components/Navigation";
import axios from "axios";
import CoinList from "../components/CoinList";

function Coins() {

    return (
        <div className="bg-dark-color">
            <Navigation />
            <h2 className="text-6xl text-center font-bold leading-snug text-white my-10 py-5">Number of coins we have</h2>
            <CoinList />
        </div>
    )
}

export default Coins
