import Image from 'next/image';
import Logo from '../assets/Logo.png'
import Visa from '../assets/Visa.png'
import Mastercard from '../assets/Mastercard.png'
import Bitcoin from '../assets/Bitcoin.png'
import Facebook from '../assets/Icon/facebook.png'
import Instagram from '../assets/Icon/instagram.png'
import Linkedin from '../assets/Icon/linkedin.png'
import Twitter from '../assets/Icon/twitter.png'
import Youtube from '../assets/Icon/youtube.png'

function Footer() {
    return (
        <div className="bg-dark-color px-20">
           <div className="grid grid-col-1 lg:grid-cols-4 py-10">
                <div className="relative h-[40px] w-[135px] cursor-pointer  mt-10">
                    <Image src={Logo} layout="fill"  objectFit="contain" objectPosition="left" />
                </div>
                <div className="second mt-10">
                    <h4 className="text-2xl text-white font-bold pb-5">Quick Link</h4>
                    <p className="text-white text-lg pt-5">Home</p>
                    <p className="text-white text-lg pt-5">Products</p>
                    <p className="text-white text-lg pt-5">About</p>
                    <p className="text-white text-lg pt-5">Features</p>
                    <p className="text-white text-lg pt-5">Contact</p>
                </div>
                <div className="third mt-10">
                    <h4 className="text-2xl text-white font-bold pb-5">Resources</h4>
                    <p className="text-white text-lg pt-5">Download Whitepapper</p>
                    <p className="text-white text-lg pt-5">Smart Token</p>
                    <p className="text-white text-lg pt-5">Blockchain Explorer</p>
                    <p className="text-white text-lg pt-5">Crypto API</p>
                    <p className="text-white text-lg pt-5">Interest</p>
                </div>
                <div className="last mt-10">
                    <h3 className="text-4xl text-white font-bold">We accept following payment systems</h3>
                    <div className="gateways flex space-x-10">
                        <div className="relative h-[64px] w-[96px] cursor-pointer  mt-10">
                            <Image src={Visa} layout="fill"  objectFit="contain" objectPosition="left" />
                        </div>
                        <div className="relative h-[64px] w-[96px] cursor-pointer  mt-10">
                            <Image src={Mastercard} layout="fill"  objectFit="contain" objectPosition="left" />
                        </div>
                        <div className="relative h-[64px] w-[96px] cursor-pointer  mt-10">
                            <Image src={Bitcoin} layout="fill"  objectFit="contain" objectPosition="left" />
                        </div> 
                    </div>
                </div>
           </div>
           <div className="footer-main flex items-center justify-between py-10">
               <p className="text-gray-color-100 text-lg">©2021 CRAPPO. All rights reserved</p>
               <div className="flex items-center justify-between w-[250px]">
                   <Image src={Facebook} className="w-[24px] h-[24px]"  objectFit="contain" />
                   <Image src={Instagram} className="w-[24px] h-[24px]"  objectFit="contain" />
                   <Image src={Youtube} className="w-[24px] h-[24px]"  objectFit="contain" />
                   <Image src={Twitter} className="w-[24px] h-[24px]"  objectFit="contain" />
                   <Image src={Linkedin} className="w-[24px] h-[24px]"  objectFit="contain" />
               </div>
           </div> 
        </div>
    )
}

export default Footer
