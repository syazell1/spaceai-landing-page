const Footer = () => {
    return (
        <section className="relative min-h-screen px-4 sm:px-6">
            <div className="max-w-[1680px] mx-auto p-40 space-y-10 flex flex-col items-center">
                <h2 className="font-semibold text-5xl">Ready To Glow?</h2>
                <p className="font-semibold">Explore how you can actually keep your patients forever and never let them go</p>

                <button className="px-8 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm lg:text-base font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all whitespace-nowrap hover:cursor-pointer">
                    Get Demo
                </button>
            </div>
            <div className="px-8 pt-20 flex justify-between">
                <div className="space-y-4">
                    <p className="text-2xl"><span className="font-semibold">SPACE</span> Ai</p>
                    <p>SpaceAi provides beauty centers with their own custom loyalty App to retain their patients.</p>
                </div>
                <div className="flex gap-20">
                    <div className="space-y-2">
                        <p className="font-semibold">Company</p>
                        <p>Process</p>
                        <p>Affiliate</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold">Support</p>
                        <p>Contact</p>
                        <p>Community</p>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-gray-300 my-4 mt-20"></div>
            <div className="px-8 pt-10 flex justify-between items-center">
                <div>
                    <p>2025 SpaceAi. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </section>
    )
}

export default Footer; 