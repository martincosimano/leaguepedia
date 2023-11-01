import Image from "next/image";

const ChampionsSection = () => {
    return (
        <section className="mt-6 md:mt-8">
            <div className="flex gap-2 md:hidden">
                <Image src="/down-arrow.svg" width="20" height="20" />
                <h2 className="text-lg font-medium uppercase">All roles</h2>
            </div>
            <div className="hidden md:flex justify-between w-full">
                <h2 className="text-lg font-medium uppercase">All</h2>
                <h2 className="text-lg font-medium uppercase">Assasins</h2>
                <h2 className="text-lg font-medium uppercase">Fighters</h2>
                <h2 className="text-lg font-medium uppercase">Mages</h2>
                <h2 className="text-lg font-medium uppercase">Marksmen</h2>
                <h2 className="text-lg font-medium uppercase">Supports</h2>
                <h2 className="text-lg font-medium uppercase">Tanks</h2>
            </div>
        </section>
    )
};

export default ChampionsSection;