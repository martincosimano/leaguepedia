import Image from "next/image";
import Link from "next/link";

const Card = ( {championUrl, championName } ) => {

    return (
        <Link className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" href={`/champion/${championUrl}`}>
            <div className="card max-h-80 w-fit">
                <Image className="card-img" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championUrl}_0.jpg`} alt="" width="220" height="100" priority={true} />
                <button className="card-btn w-full bottom-0 text-lg font-semibold text-white">{championName}</button>
            </div>
        </Link>
    )
}

export default Card;