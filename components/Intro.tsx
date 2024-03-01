import Hero from "./Hero";
import Header from "./Header";
import Image from "next/image";

export default function Intro() {
    return (
        <div className="bg-gradient-to-b lg:bg-gradient-to-r from-gradient-very-light-red to-gradient-light-red relativ rounded-es-[80px] py-10 lg:px-20 px-5 relative overflow-hidden -z-20">
            <Image src="/bg-pattern-intro-mobile.svg" alt="Background pattern mobile" className="lg:hidden block absolute scale-[2.5] max-w-[600px] -z-10 left-[200px] top-[80px]" width={1324} height={1324} />
            <Image src="/bg-pattern-intro-desktop.svg" alt="Background pattern desktop" className="hidden lg:block absolute scale-[2.5] -z-10 left-[500px] -top-[500px]" width={1324} height={1324} />
            <Header />
            <Hero />
        </div>
    );
}