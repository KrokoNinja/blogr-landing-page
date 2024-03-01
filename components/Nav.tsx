import Image from "next/image";

export default function Nav() {
    return (
        <nav className="hidden md:flex justify-between w-full font-ubuntu">
            <ul className="flex gap-x-6 items-center text-neutral-white font-[500]">
                <li className="flex items-center gap-x-2">Product <Image src="/icon-arrow-light.svg" alt="Arrow Icon" width={10} height={7} /></li>
                <li className="flex items-center gap-x-2">Company <Image src="/icon-arrow-light.svg" alt="Arrow Icon" width={10} height={7} /></li>
                <li className="flex items-center gap-x-2">Connect <Image src="/icon-arrow-light.svg" alt="Arrow Icon" width={10} height={7} /></li>
            </ul>
            <div className="flex gap-x-2">
                <button className="text-neutral-white rounded-full font-bold py-2 px-8">Login</button>
                <button className="text-primary-light-red font-bold bg-white py-2 px-8 rounded-full">Sign Up</button>
            </div>
        </nav>
    )
}