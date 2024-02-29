import Image from "next/image";
import Hero from "./Hero";
import Nav from "./Nav";

export default function Intro() {
    return (
        <div className="bg-gradient-to-r from-gradient-very-light-red to-gradient-light-red relativ rounded-es-[80px] py-10 px-20">
            <Nav />
            <Hero />
        </div>
    );
}