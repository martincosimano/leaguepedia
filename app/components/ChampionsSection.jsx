"use client";
import Image from "next/image";
import { useState } from "react";
import DropdownRoles from "./DropdownRoles";
import Card from "./Card";

const ChampionsSection = () => {

    const [selected, setSelected] = useState({
        all: true,
        assassins: false,
        fighters: false,
        mages: false,
        marksmen: false,
        supports: false,
        tanks: false,
    });

    function handleSelection(role) {
        setSelected((prevSelected) => ({
            ...Object.fromEntries(Object.entries(prevSelected).map(([key]) => [key, key === role])),
        }));
    }

    const [active, setActive] = useState(false)

    function handleActive() {
        setActive(prevActive => !prevActive)
    }

    return (
        <section className="mt-6 md:my-10">
            <div className="flex gap-2 md:hidden cursor-pointer w-fit" onClick={handleActive}>
                <Image src="/down-arrow.svg" width="20" height="20" alt="" />
                <button className="text-lg font-medium uppercase">Roles</button>
                {active && <DropdownRoles />}
            </div>
            <nav className="hidden md:flex">
                <ul className="hidden md:flex justify-between w-full list-none">
                    <li>
                        <button className={`text-lg font-medium uppercase ${selected.all && 'border-b-2 border-gold-100'}`} onClick={() => handleSelection('all')}>All</button>
                    </li>
                    <li>
                        <button className={`text-lg font-medium uppercase ${selected.assassins && 'border-b-2 border-gold-100'}`} onClick={() => handleSelection('assassins')}>Assassins</button>
                    </li>
                    <li>
                        <button className={`text-lg font-medium uppercase ${selected.fighters && 'border-b-2 border-gold-100'}`} onClick={() => handleSelection('fighters')}>Fighters</button>
                    </li>
                    <li>
                        <button className={`text-lg font-medium uppercase ${selected.mages && 'border-b-2 border-gold-100'}`} onClick={() => handleSelection('mages')}>Mages</button>
                    </li>
                    <li>
                        <button className={`text-lg font-medium uppercase ${selected.marksmen && 'border-b-2 border-gold-100'}`} onClick={() => handleSelection('marksmen')}>Marksmen</button>
                    </li>
                    <li>
                        <button className={`text-lg font-medium uppercase ${selected.supports && 'border-b-2 border-gold-100'}`} onClick={() => handleSelection('supports')}>Supports</button>
                    </li>
                    <li>
                        <button className={`text-lg font-medium uppercase ${selected.tanks && 'border-b-2 border-gold-100'}`} onClick={() => handleSelection('tanks')}>Tanks</button>
                    </li>
                </ul>
            </nav>

            <div className="mt-6 md:mt-10">
                <Card />
            </div>
        </section>
    )
};

export default ChampionsSection;