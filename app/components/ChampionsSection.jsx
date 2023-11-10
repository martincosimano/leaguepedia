"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import DropdownRoles from "./DropdownRoles";
import SearchBar from './SearchBar';
import Card from "./Card";

const ChampionsSection = () => {

    // Dropdown menu
    const [active, setActive] = useState(false)

    function handleActive() {
        setActive(prevActive => !prevActive)
    }

    // Fetching Api
    const [apiData, setApiData] = useState([]);
    const [filteredChampions, setFilteredChampions] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetch(
                    "https://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion.json"
                );

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

    // Search functionality
    const [searchText, setSearchText] = useState("");

    // Handle search input change
    const handleSearch = (text) => {
        // Remove spaces and apostrophes from the search input
        const formattedText = text.replace(/[' . &]/g, "").toLowerCase();
        setSearchText(formattedText);
    };

    // Filter champions based on the search input
    const filteredChampionsByName = filteredChampions.filter((champion) =>
        champion.name.replace(/[' . &]/g, "").toLowerCase().includes(searchText)
    );

    // Handling roles filter

    const [selected, setSelected] = useState({
        All: true,
        Assassin: false,
        Fighter: false,
        Mage: false,
        Marksman: false,
        Support: false,
        Tank: false,
    });

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
            <SearchBar onSearch={handleSearch} />
            <div className="flex gap-2 md:hidden cursor-pointer w-fit" onClick={handleActive}>
                <Image src="/down-arrow.svg" width="20" height="20" alt="" />
                <button className="text-lg font-medium uppercase">Roles</button>
                {active && <DropdownRoles handleSelection={handleSelection} selected={selected} roleButtons={roleButtons} />}
            </div>
            <nav className="hidden md:flex">
                <ul className="hidden md:flex justify-between w-full list-none">
                    {roleButtons.map((roleButton) => (
                        <li key={roleButton.role}>
                            <button
                                className={`text-lg font-medium uppercase opacity-80 ${selected[roleButton.role] && "border-b-2 border-gold-100 opacity-100"
                                    }`}
                                onClick={() => handleSelection(roleButton.role)}
                            >
                                {roleButton.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            {!apiData.length ?
                <div className="flex justify-center items-center h-96">
                    <ClipLoader color={"rgba(198, 112, 1, 0.842)"} />
                </div> :
                <div className="mt-6 md:mt-10 grid grid-cols-12 lg:grid-cols-10 gap-3 md:gap-5 mx-1 clear">
                    {filteredChampionsByName.map((champion, index) => (
                        <Card
                            key={index}
                            championName={champion.name}
                            championUrl={champion.id}
                        />
                    ))}
                </div>
            }
        </section>
    );
};

export default ChampionsSection;