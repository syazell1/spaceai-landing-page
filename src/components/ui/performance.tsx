const Performance = () => {
    return (
        <section className="relative min-h-screen px-4 sm:px-6">
            <div className="max-w-[1680px] mx-auto p-40 space-y-10">
                <h2 className="text-[#6284FF] text-5xl">Bling-Bling your success</h2>
                <p className="font-semibold text-gray-500">Fact: Retaining a client costs 7x less than getting a new one.</p>
                <StatsDisplay />
            </div>
        </section>
    )
}

import Image from 'next/image';
import React from 'react';

type TStatsCard = {
    percentage: string,
    description: string,
    icon: React.JSX.Element
}

const StatsCard = ({ icon, percentage, description }: TStatsCard) => {
    const colors = {
        blue: {
            bg: 'bg-blue-100',
            iconBg: 'bg-blue-500',
            text: 'text-blue-500'
        }
    };

    return (
        <div className="p-4 rounded-lg flex flex-col gap-1 bg-blue-100 border border-blue-500 space-y-4">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded flex items-center justify-center text-white">
                    {icon}
                </div>
            </div>
            <div className="text-blue-500 text-4xl font-bold">{percentage}</div>
            <div className="text-gray-500 text-[18px] font-semibold">{description}</div>
        </div>
    );
};

const StatsDisplay = () => {
    const stats = [
        {
            icon:
                <Image
                    alt="money"
                    src="/money.png"
                    width={500}
                    height={500}
                    className="object-contain max-h-full"
                    loading="lazy"
                />
            ,
            percentage: "+200%",
            description: "Higher Spend Per Client"
        },
        {
            icon:
                <Image
                    alt="google"
                    src="/google.png"
                    width={500}
                    height={500}
                    className="object-contain max-h-full"
                    loading="lazy"
                />,
            percentage: "+140%",
            description: "5-Stars Google Reviews"
        },
        {
            icon: 
                <Image
                    alt="heart"
                    src="/heart.png"
                    width={500}
                    height={500}
                    className="object-contain max-h-full"
                    loading="lazy"
                />,
            percentage: "+90%",
            description: "Client Satisfaction"
        },
        {
            icon: 
                <Image
                    alt="magnet"
                    src="/magnet.png"
                    width={500}
                    height={500}
                    className="object-contain max-h-full"
                    loading="lazy"
                />,
            percentage: "+75%",
            description: "More Referrals"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="grid grid-cols-2 gap-10">
                {stats.map((stat, index) => (
                    <StatsCard
                        key={index}
                        icon={stat.icon}
                        percentage={stat.percentage}
                        description={stat.description}
                    />
                ))}
            </div>
        </div>
    );
};



export default Performance;