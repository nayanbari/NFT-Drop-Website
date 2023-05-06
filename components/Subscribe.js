function Subscribe() {
    return (
        <div className="flex items-center justify-center linear-gradient-dark py-24">
            <div className="w-2/3 flex items-center space-x-10 bg-blue-color px-10 py-12 rounded-2xl">
                <div className="left mr-10">
                    <h3 className="text-4xl text-white font-bold ">Start Mining Now</h3>
                    <p className="pt-5 text-lg font-normal text-white">Join now with CRAPPO to get the latest news <br /> and start mining now</p>
                </div>
                    <input type="email" className="flex-grow text-white text-xl pb-5 outline-none bg-transparent border-b-2" placeholder="Enter Your Email" />
                    <button className="text-xl font-semibold text-dark-color py-5 px-8 bg-white rounded-full hover:scale-105 transition duration-150 active:scale-110">Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
