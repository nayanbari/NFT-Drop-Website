function HashRate() {
    return (
        <div className="flex flex-col items-center bg-dark-color ">
            <h2 className="text-6xl font-bold leading-snug text-white mt-10">Check how much you can earn</h2>
            <p className="text-lg text-center font-normal text-gray-color-100 mt-10">Let’s check your hash rate to see how much you will earn today, <br />Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="hash-rate-cal w-1/2 bg-white p-10 rounded-2xl translate-y-1/2 shadow-2xl">
                <div className="top-section flex space-x-10 ">
                    <input type="number" className="flex-grow outline-none bg-transparent border-b-2" placeholder="Enter your hash rate" />
                    <select  className="outline-none bg-transparent border-b-2">
                        <option>Kh/s</option>
                        <option>Mh/s</option>
                        <option>Gh/s</option>
                        <option>Th/s</option>
                        <option>Ph/s</option>
                        <option>Eh/s</option>
                    </select>
                    <button className="text-sm text-white bg-blue-color px-5 py-2 rounded-full cursor-pointer hover:scale-105 transition duration-150 active:scale-110">Calculate</button>
                </div>
                <div className="calculation ">
                    <h4 className="text-lg font-semibold text-blue-color pt-10">ESTIMATED 24 HOUR REVENUE:</h4>
                    <h2 className="text-4xl text-black font-bold pt-5">0.055 130 59 ETH <span className="text-blue-color">($1275)</span></h2>
                    <p className="text-lg font-normal text-gray-color-500 pt-5">Revenue will change based on mining difficulty and Ethereum price.</p>
                </div>
            </div>
        </div>
    )
}

export default HashRate
