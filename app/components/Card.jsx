import Image from "next/image";
import Link from "next/link";

const Card = ( {championUrl, championName } ) => {

    return (
        <Link href={`/champion/${championUrl}`}>
            <div className="card h-80 w-fit">
                <Image className="card-img" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championUrl}_0.jpg`} alt="" width="220" height="100" priority={true} />
                <button className="card-btn w-full bottom-0 text-lg font-semibold text-white">{championName}</button>
            </div>
        </Link>
    )
}

export default Card;