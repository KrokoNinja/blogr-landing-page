import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Header({ containerStyles } : {containerStyles: string}) {
    return (
        <header className={`${containerStyles}`}>
            <Image src="/logo.svg" width={101} height={40} alt="Logo" />
            <MobileNav />
            <Nav />
        </header>
    )
}