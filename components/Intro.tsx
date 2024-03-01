import Hero from "./Hero";
import Header from "./Header";
import Image from "next/image";

export default function Intro() {
    return (
        <div className="bg-gradient-to-b xl:bg-gradient-to-r from-gradient-very-light-red to-gradient-light-red relativ rounded-es-[80px] py-10 xl:px-20 px-5 relative overflow-hidden -z-20">
            <Image src="/bg-pattern-intro-mobile.svg" alt="Background pattern mobile" className="xl:hidden block absolute scale-[2.5] max-w-[500px] -z-10 left-[100px] top-[120px]" width={1324} height={1324} />
            <Header />
            <Hero />
        </div>
    );
}