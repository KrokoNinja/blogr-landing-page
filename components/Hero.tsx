export default function Hero({ containerStyles} : {containerStyles: string}) {
    return (
        <div className={`${containerStyles}`}>
            <h1 className="text-4xl text-center font-[600] text-neutral-white mb-2 lg:mb-3 lg:text-5xl">A modern <br className="lg:hidden"/> publishing platform</h1>
            <p className="text-center text-neutral-white mb-8 lg:text-lg">Grow your audience and build your <br className="xl:hidden" /> online brand</p>
            <div className="flex flex-row items-center justify-center gap-x-4">
                <button className="btn button-primary button-primary-hover">Start for Free</button>
                <button className="btn button-secondary button-secondary-hover">Learn More</button>
            </div>
        </div>
    )
}