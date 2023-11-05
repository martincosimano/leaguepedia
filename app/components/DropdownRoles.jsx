const DropdownRoles = () => {
    return (
        <nav className="absolute mt-8 z-10 bg-dark-100 w-full opacity-90 rounded-sm p-2">
            <ul className="flex flex-col gap-0.5">
                <li>
                    <button className="text-md font-medium uppercase focus:text-gold-100">ALL</button>
                </li>
                <li>
                    <button className="text-md font-medium uppercase focus:text-gold-100">ASSASSINS</button>
                </li>
                <li>
                    <button className="text-md font-medium uppercase focus:text-gold-100">FIGHTERS</button>
                </li>
                <li>
                    <button className="text-md font-medium uppercase focus:text-gold-100">MAGES</button>
                </li>
                <li>
                    <button className="text-md font-medium uppercase focus:text-gold-100">MARKSMEN</button>
                </li>
                <li>
                    <button className="text-md font-medium uppercase focus:text-gold-100">SUPPORTS</button>
                </li>
                <li>
                    <button className="text-md font-medium uppercase focus:text-gold-100">TANKS</button>
                </li>
            </ul>
        </nav>
    )
};

export default DropdownRoles;