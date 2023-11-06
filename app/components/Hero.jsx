import { Libre_Baskerville } from 'next/font/google';

const libre = Libre_Baskerville({ 
    subsets: ['latin'],
    weight: "700",
});

const Hero = () => {
    return (
        <main className="flex flex-col md:items-center mt-8 gap-6 md:gap-12">
            <h1 className={`${libre.className} font-medium tracking-wide text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase`}>Choose your <span className="lg:block lg:text-center lg:mt-3">champion</span></h1>
        </main>
    )
};

export default Hero;