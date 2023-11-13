import Image from "next/image";

const Navbar = () => {
    return (
        <header className="my-5 flex justify-between items-center">
            <div>
                <Image src="/logo.png" alt="" className="w-fit" width="30" height="30"/>
            </div>
            <div>
                <a href="https://github.com/martincosimano" className="opacity-90 hover:opacity-100">
                    <Image src="/github.svg" alt="" width="30" height="30"/>
                </a>
            </div>
        </header>
    )
}

export default Navbar