import Image from "next/image";

const Card = (props) => {



    return (
        <div className="card h-80 w-fit drop-shadow-xl">
            <Image src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.championImg}_0.jpg`} alt="" width="220" height="100" />
            <button className="card-btn w-full bottom-0 text-lg font-semibold text-white">{props.championName}</button>
        </div>
    )
}

export default Card;