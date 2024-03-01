import Image from "next/image";

export default function MobileNav() {
    return (
        <div className="flex items-center">
            <Image className="xl:hidden" src="/icon-hamburger.svg" width={32} height={18} alt="Hamburger menu" />
        </div>
    )
}