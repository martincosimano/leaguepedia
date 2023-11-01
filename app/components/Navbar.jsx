import Image from "next/image";

const Navbar = () => {
    return (
        <header className="my-5">
            <div>
                <Image src="/logo.png" alt="" width="30" height="30"/>
            </div> 
        </header>
    )
}

export default Navbar