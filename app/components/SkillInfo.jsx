import { useState } from "react";
import Image from "next/image";

const SkillInfo = ({ apiData }) => {
    const [selected, setSelected] = useState({
        passive: true,
        primary: false,
        secondary: false,
        tertiary: false,
        ultimate: false,
    });

    const skillButton = [
        { type: "passive" },
        { type: "primary", id: 0 },
        { type: "secondary", id: 1 },
        { type: "tertiary", id: 2 },
        { type: "ultimate", id: 3 },
    ];

    const [selectedType, setSelectedType] = useState("passive");

    function handleSelection(type, id) {
        setSelectedType(type);

        if (type === "passive") {
            setSelected({
                passive: true,
                primary: false,
                secondary: false,
                tertiary: false,
                ultimate: false,
            });
        } else {
            setSelected((prevSelected) => ({
                ...Object.fromEntries(
                    Object.entries(prevSelected).map(([key]) => [key, key === type])
                ),
            }));
        }
    }

    console.log(selectedType)

    return (
        <>
            <nav>
                <ul className='flex mt-3 gap-5'>
                    {skillButton.map((skillButton) => (
                        <li key={skillButton.type}>
                            <button
                                className={`rounded-md border-2 ${selected[skillButton.type] ? "opacity-100 border-gold-100" : "border-transparent opacity-80"
                                    }`}
                                onClick={() => handleSelection(skillButton.type, skillButton.id)}
                            >
                                <Image className='rounded-md shadow-lg cursor-pointer' src={`http://ddragon.leagueoflegends.com/cdn/13.21.1/img/${skillButton.type === "passive" ? `passive/${apiData[0]?.passive.image.full}` : `spell/${apiData[0]?.spells[skillButton.id]?.image.full}`}`} width="50" height="50" alt="" ></Image>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='mt-6'>
                <h2 className='text-2xl font-semibold'>Description</h2>
                <div className='mt-3 max-w-3xl'>
                    <p className='text-gray-300'>
                        {selectedType === "passive"
                            ? apiData[0]?.passive.description.replace(/<[^>]*>/g, ' ')
                            : apiData[0]?.spells.find((spell, i) => i === skillButton.find((button) => button.type === selectedType)?.id)?.description.replace(/<[^>]*>/g, ' ')}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SkillInfo;