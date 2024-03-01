import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="flex justify-between mb-16">
            <Image src="/logo.svg" width={101} height={40} alt="Logo" />
            <MobileNav />
            <Nav />
        </header>
    )
}