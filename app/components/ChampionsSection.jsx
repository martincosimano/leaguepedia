"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DropdownRoles from "./DropdownRoles";
import Card from "./Card";

// Roles navbar
const ChampionsSection = () => {

    // Dropdown menu
    const [active, setActive] = useState(false)

    function handleActive() {
        setActive(prevActive => !prevActive)
    }


    const [selected, setSelected] = useState({
        All: true,
        Assassin: false,
        Fighter: false,
        Mage: false,
        Marksman: false,
        Support: false,
        Tank: false,
    });

    const [apiData, setApiData] = useState([]);
    const [filteredChampions, setFilteredChampions] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetch(
                    "http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion.json"
                );
                if (!data.ok) {
                    throw new Error(`HTTP error! Status: ${data.status}`);
                }
                const res = await data.json();
                const championsData = Object.values(res.data);

                setApiData(championsData);
                setFilteredChampions(championsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    function handleSelection(role) {
        if (role === "All") {
            setSelected({
                All: true,
                Assassin: false,
                Fighter: false,
                Mage: false,
                Marksman: false,
                Support: false,
                Tank: false,
            });
            setFilteredChampions(apiData);
        } else {
            setSelected((prevSelected) => ({
                ...Object.fromEntries(
                    Object.entries(prevSelected).map(([key]) => [key, key === role])
                ),
            }));

            const filtered = apiData.filter((champion) =>
                champion.tags.includes(role)
            );
            setFilteredChampions(filtered);
        }
    }

    const roleButtons = [
        { role: "All", label: "All" },
        { role: "Assassin", label: "Assassins" },
        { role: "Fighter", label: "Fighters" },
        { role: "Mage", label: "Mages" },
        { role: "Marksman", label: "Marksmen" },
        { role: "Support", label: "Supports" },
        { role: "Tank", label: "Tanks" },
    ];

    return (
        <section className="mt-6 md:my-10">
            <div className="flex gap-2 md:hidden cursor-pointer w-fit" onClick={handleActive}>
                <Image src="/down-arrow.svg" width="20" height="20" alt="" />
                <button className="text-lg font-medium uppercase">Roles</button>
                {active && <DropdownRoles />}
            </div>
            <nav className="hidden md:flex">
                <ul className="hidden md:flex justify-between w-full list-none">
                    {roleButtons.map((roleButton) => (
                        <li key={roleButton.role}>
                            <button
                                className={`text-lg font-medium uppercase ${selected[roleButton.role] && "border-b-2 border-gold-100"
                                    }`}
                                onClick={() => handleSelection(roleButton.role)}
                            >
                                {roleButton.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-6 md:mt-10 flex flex-wrap gap-6 mx-0.5">
                {filteredChampions.map((champion, index) => (
                    <Card
                        key={index}
                        championName={champion.name}
                        championImg={champion.image.full.split(".")[0]}
                    />
                ))}
            </div>
        </section>
    );
};

export default ChampionsSection;