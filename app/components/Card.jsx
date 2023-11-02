import Image from "next/image";

const Card = () => {
    return (
        <div className="card h-80 w-fit drop-shadow-xl">
            <Image className="h-full object-cover" src="/Aatrox.jpg" width="230" height="100" />
            <button className="card-btn w-full bottom-0 text-lg font-bold text-white">AATROX</button>
        </div>
    )
}

export default Card;