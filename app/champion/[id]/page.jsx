"use client";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Champion = () => {
    const pathname = usePathname();
    const championName = pathname.split('/').pop();

    return (
        <section>
            <div>
                <Image className='banner w-full object-cover md:max-h-100' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`} width="900" height="100" />
            </div>
        </section>
    )
};

export default Champion;