import Image from "next/image";
import { Libre_Baskerville } from 'next/font/google';

const libre = Libre_Baskerville({ 
    subsets: ['latin'],
    weight: "700",
});

const Hero = () => {
    return (
        <main className="flex flex-col md:items-center mt-8 gap-6 md:gap-12">
            <div className="flex items-center relative md:w-3/5">
                <Image src="/search.svg" width="20" height="20" alt="" className="absolute left-2"/>
                <input type="search" className="w-full pl-8 py-2 rounded-md bg-transparent border-2 text-gray-400 font-medium placeholder-gray-400 border-gray-500 outline-none" placeholder="Search champion"/>
            </div>
            <h1 className={`${libre.className} font-medium tracking-wide text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase`}>Choose your <span className="lg:block lg:text-center lg:mt-3">champion</span></h1>
        </main>
    )
};

export default Hero;