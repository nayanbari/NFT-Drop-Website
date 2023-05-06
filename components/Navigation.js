import Image from 'next/image';
import Logo from '../assets/Logo.png'
import Link from 'next/link'
function Navigation() {
    return (
        <section className="navigation bg-dark-color flex justify-between items-center px-20 py-10">
           <div className="relative h-[40px] w-[135px] cursor-pointer ">
                <Image src={Logo} layout="fill"  objectFit="contain" objectPosition="left" />
           </div>
            <div className="links flex items-center space-x-4">
            <Link href={`/`}>
                <p className="text-sm text-white hover:text-gray-300 cursor-pointer transition duration-100 ease-out">Products</p>

                </Link>                <p className="text-sm text-white hover:text-gray-300 cursor-pointer transition duration-100 ease-out">Features</p>
                <p className="text-sm text-white hover:text-gray-300 cursor-pointer transition duration-100 ease-out">About</p>
                <p className="text-sm text-white hover:text-gray-300 cursor-pointer transition duration-100 ease-out">Contact</p>
                <p className="text-sm text-white hover:text-gray-300 cursor-pointer transition duration-100 ease-out">Login</p>
                <div className="vertical-line w-[1px] h-6 bg-white"></div>
                <p className="text-sm text-white bg-blue-color px-5 py-2 rounded-full cursor-pointer   ">Register</p>
            </div>
        </section>
        
    )
}

export default Navigation

