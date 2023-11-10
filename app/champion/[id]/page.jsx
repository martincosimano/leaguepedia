"use client";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import SkillInfo from '@/app/components/SkillInfo';

const Champion = () => {
    const pathname = usePathname();
    const championName = pathname.split('/').pop();

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetch(
                    `https://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion/${championName}.json`
                );
                const res = await data.json();
                const championsData = Object.values(res.data);

                setApiData(championsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    const styling = {
        backgroundImage: `url(${`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${apiData[0]?.id}_0.jpg`})`,
    }

    return (
        <>
            {!apiData.length ? (
                <div className="flex justify-center items-center h-screen">
                    <ClipLoader color={"rgba(198, 112, 1, 0.842)"} />
                </div>
            ) : (
                <section className='mb-10'>
                    <Image
                        className='banner w-full object-cover md:max-h-100 lg:hidden'
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${apiData[0]?.id}_0.jpg`}
                        width="900"
                        height="100"
                        alt=""
                        priority={true}
                    />
                    <div className='parallax hidden lg:block' style={styling}></div>
                    <div className='container-global'>
                        <div className='absolute top-4 flex flex-col justify-between'>
                            <Link href="/">
                                <Image
                                    className='border-2 border-gray-500 rounded-full bg-dark-200 opacity-90 hover:opacity-100'
                                    src="/left-arrow.svg"
                                    width="40"
                                    height="35"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className='relative -top-10 sm:-top-14'>
                            <h1 className='champion-title text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide'>
                                {apiData[0]?.name}
                            </h1>
                        </div>
                        <section>
                            <h2 className='text-2xl font-semibold'>About</h2>
                            <div className='mt-3 max-w-3xl'>
                                <p className='text-gray-300'>{apiData[0]?.lore}</p>
                            </div>
                        </section>
                        <section className='mt-6'>
                            <h2 className='text-2xl font-semibold'>Skills</h2>
                            <SkillInfo apiData={apiData} />
                        </section>
                    </div>
                </section>
            )}
        </>
    )
};

export default Champion;