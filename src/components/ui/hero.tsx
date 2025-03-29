import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="space-y-4 mt-44">
                <div>
                    <h2 className="text-center font-semibold text-4xl">Enter The Universe Where You Turn</h2>
                    <h2 className="text-center font-semibold text-4xl"><span className="text-[#538FFF]">Loyalty</span> into Profits</h2>
                </div>
                <p className="text-center">Take your Practice to the next level with your own custom App</p>
                <div className="flex justify-center">
                    <Image alt="iphone" src="/iphone.png" width={450} height={1000} />
                </div>
            </div>
        </section>
    )
}

export default Hero;