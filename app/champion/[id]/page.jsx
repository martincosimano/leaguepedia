"use client";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Champion = () => {
    const pathname = usePathname();
    const championName = pathname.split('/').pop();

    return (
        <section>
            <div className='relative'>
                <Link href="/" className='absolute top-6 left-8'>
                    <Image className='border-2 border-gray-500 rounded-full bg-dark-200 opacity-90 hover:opacity-100' src="/left-arrow.svg" width="40" height="35" />
                </Link>
                <Image className='banner w-full object-cover md:max-h-100' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`} width="900" height="100" />
                <div className='absolute bottom-4 left-8'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase'>{championName}</h1>
                </div>
            </div>
        </section>
    )
};

export default Champion;