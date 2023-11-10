import Image from "next/image";
import Link from "next/link";

const Card = (props) => {



    return (
        <Link href={`/champion/${props.championUrl}`}>
            <div className="card h-80 w-fit drop-shadow-xl">
                <Image src={`/champions/${props.championUrl}_0.webp`} alt="" width="220" height="100" />
                <button className="card-btn w-full bottom-0 text-lg font-semibold text-white">{props.championName}</button>
            </div>
        </Link>
    )
}

export default Card;