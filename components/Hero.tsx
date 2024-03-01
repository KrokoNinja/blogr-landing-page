export default function Hero() {
    return (
        <div className="font-overpass py-16">
            <h1 className="text-4xl text-center font-[600] text-neutral-white mb-2">A modern <br className="lg:hidden"/> publishing platform</h1>
            <p className="text-center text-neutral-white mb-8">Grow your audience and build your <br className="xl:hidden" /> online brand</p>
            <div className="flex flex-row items-center justify-center gap-x-4">
                <button className="font-ubuntu bg-neutral-white text-primary-light-red rounded-full py-2 px-4 font-bold">Start for Free</button>
                <button className="font-ubuntu text-neutral-white font-bold border border-neutral-white rounded-full py-2 px-5">Learn More</button>
            </div>
        </div>
    )
}