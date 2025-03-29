'use client'

import Image from "next/image";
import { useState } from "react";

const items = [
    "Loyalty Program",
    "VIP Membership",
    "Private Store",
    "In-App Booking",
    "Notifications",
]

const Features = () => {
    const [label, setLabel] = useState("Loyalty Program");
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-[1680px] mx-auto p-2 space-y-30">
                <NavigationBar setLabel={(data) => setLabel(data)} />
                <div className="h-[600px] w-full"> 
                    {label === "Loyalty Program" && <LoyaltyFeature />}
                    {label === "VIP Membership" && <VipFeature />}
                    {label === "Private Store" && <PrivateStoreFeature />}
                    {label === "Notifications" && <NotificationsFeature />}
                </div>
            </div>
        </section>
    )
}

const LoyaltyFeature = () => {
    return (
        <section className="h-full">
            <div className="grid grid-cols-2 gap-8 items-center h-full">
                <div className="pr-4">
                    <h3 className="text-justify font-semibold text-5xl">Reward loyal clients for the more they <span className="text-[#EE69C8]">buy, refer and review.</span> Gamefied systems to engage them more and keep them forever.</h3>
                </div>
                <div className="h-[500px] flex items-center justify-center">
                    <Image 
                        alt="iphone" 
                        src="/loyalty.png" 
                        width={750} 
                        height={500} 
                        className="object-contain max-h-full"
                        loading="lazy" 
                    />
                </div>
            </div>

            <button className="px-8 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm lg:text-base font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all whitespace-nowrap hover:cursor-pointer">
                Get Demo
            </button>
        </section>
    )
}

const VipFeature = () => {
    return (
        <section className="h-full">
            <div className="grid grid-cols-2 gap-8 items-center h-full">
                <div className="pr-4">
                    <h3 className="text-justify font-semibold text-5xl">Sell exclusivity, not only treatments-Custom memberships your way. Create offers so good they can&apos;t say no to, Create magic.</h3>
                </div>
                <div className="h-[500px] flex items-center justify-center">
                    <Image 
                        alt="vip" 
                        src="/vip.png" 
                        width={640} 
                        height={500} 
                        className="object-contain max-h-full"
                        loading="lazy" 
                    />
                </div>
            </div>
        </section>
    )
}

const PrivateStoreFeature = () => {
    return (
        <section className="h-full">
            <div className="grid grid-cols-2 gap-8 items-center h-full">
                <div className="pr-4">
                    <h3 className="text-justify font-semibold text-4xl">Your App. Your Store.</h3>
                    <h3 className="text-justify font-semibold text-4xl" >Sell treatments and products at anytime. Get paid while your sleep.</h3>
                </div>
                <div className="h-[500px] flex items-center justify-center"> 
                    <Image 
                        alt="private" 
                        src="/private.png" 
                        width={800} 
                        height={600} 
                        className="object-contain max-h-full"
                        loading="lazy" 
                    />
                </div>
            </div>
        </section>
    )
}

const NotificationsFeature = () => {
    return (
        <section className="h-full">
            <div className="grid grid-cols-2 gap-8 items-center h-full">
                <div className="pr-4 space-y-4">
                    <h3 className="text-justify font-semibold text-4xl">Custom notification, <span className="text-[#FF64C1]">custom offer!</span></h3>
                    <p className="text-gray-500 font-semibold" >Fun fact: SMS offers convert 400% higher than email and SMSmarketing</p>
                </div>
                <div className="h-[500px] flex items-center justify-center"> 
                    <Image 
                        alt="notifications" 
                        src="/notifications.png" 
                        width={800} 
                        height={600} 
                        className="object-contain max-h-full"
                        loading="lazy" 
                    />
                </div>
            </div>
        </section>
    )
}
const NavigationBar = ({ setLabel }: { setLabel: (data: string) => void }) => {
    return (
        <div className="bg-gray-50 py-4 px-6 rounded-md">
            <div className="max-w-[1680px] mx-auto">
                <nav className="flex justify-between space-x-8 md:space-x-12">
                    {items.map(v => <NavItem key={v} label={v} setLabel={setLabel} />)}
                </nav>
            </div>
        </div>
    );
};

const NavItem = ({ label, setLabel }: { label: string, setLabel: (data: string) => void }) => {
    return (
        <button
            onClick={() => {
                setLabel(label)
            }}
            className="px-2 py-1 text-gray-800 hover:text-black font-medium text-sm hover:cursor-pointer">
            {label}
        </button>
    );
};


export default Features;