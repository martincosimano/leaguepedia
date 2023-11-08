"use client";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Champion = () => {
    const pathname = usePathname();
    const championName = pathname.split('/').pop();

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetch(
                    `http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion/${championName}.json`
                );
                if (!data.ok) {
                    throw new Error(`HTTP error! Status: ${data.status}`);
                }
                const res = await data.json();
                const championsData = Object.values(res.data);

                setApiData(championsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    return (
        <>
            {!apiData.length ? (
                <div className="flex justify-center items-center h-screen">
                    <ClipLoader color={"rgba(198, 112, 1, 0.842)"} />
                </div>
            ) : (
                <section className='mb-10'>
                    <Image
                        className='banner w-full object-cover md:max-h-100'
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${apiData[0]?.id}_0.jpg`}
                        width="900"
                        height="100"
                        alt=""
                    />
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
                            <h1 className='text-3xl sm:text-4xl font-bold text-white uppercase'>
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
                            <h2 className='text-2xl font-semibold'>Abilities</h2>
                            <nav>
                                <ul className='flex mt-3 gap-5'>
                                    <li>
                                        <button className='rounded-md border-2 border-transparent opacity-80 focus:opacity-100 focus:border-gold-100'>
                                            <Image className='rounded-md shadow-lg cursor-pointer' src={`http://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/${apiData[0]?.passive.image.full}`} width="50" height="50" alt="" ></Image>
                                        </button>
                                    </li>
                                    <li>
                                        <button className='rounded-md border-2 border-transparent opacity-80 focus:opacity-100 focus:border-gold-100'>
                                            <Image className='rounded-md shadow-lg cursor-pointer' src={`http://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/${apiData[0]?.spells[0].image.full}`} width="50" height="50" alt="" ></Image>
                                        </button>
                                    </li>
                                    <li>
                                        <button className='rounded-md border-2 border-transparent opacity-80 focus:opacity-100 focus:border-gold-100'>
                                            <Image className='rounded-md shadow-lg cursor-pointer' src={`http://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/${apiData[0]?.spells[1].image.full}`} width="50" height="50" alt="" ></Image>
                                        </button>
                                    </li>
                                    <li>
                                        <button className='rounded-md border-2 border-transparent opacity-80 focus:opacity-100 focus:border-gold-100'>
                                            <Image className='rounded-md shadow-lg cursor-pointer' src={`http://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/${apiData[0]?.spells[2].image.full}`} width="50" height="50" alt="" ></Image>
                                        </button>
                                    </li>
                                    <li>
                                        <button className='rounded-md border-2 border-transparent opacity-80 focus:opacity-100 focus:border-gold-100'>
                                            <Image className='rounded-md shadow-lg cursor-pointer' src={`http://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/${apiData[0]?.spells[3].image.full}`} width="50" height="50" alt="" ></Image>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                            <div className='mt-6'>
                                <h2 className='text-2xl font-semibold'>Description</h2>
                                <div className='mt-3 max-w-3xl'>
                                    <p className='text-gray-300'>Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            )}
        </>
    )
};

export default Champion;