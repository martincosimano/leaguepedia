import React, { useState } from "react";

const DropdownRoles = ({ handleSelection }) => {
    const [selected, setSelected] = useState("All");

    const roleButtons = [
        { role: "All", label: "All" },
        { role: "Assassin", label: "Assassins" },
        { role: "Fighter", label: "Fighters" },
        { role: "Mage", label: "Mages" },
        { role: "Marksman", label: "Marksmen" },
        { role: "Support", label: "Supports" },
        { role: "Tank", label: "Tanks" },
    ];

    const handleRoleSelection = (role) => {
        setSelected(role);
        handleSelection(role);
    };

    return (
        <nav className="absolute mt-8 z-10 bg-dark-100 w-full opacity-90 rounded-sm p-2">
            <ul className="flex flex-col gap-0.5">
                {roleButtons.map((role) => (
                    <li key={role.role}>
                        <button
                            className={`text-md font-medium uppercase focus:text-gold-100 ${
                                selected === role ? "text-gold-100" : ""
                            }`}
                            onClick={() => handleRoleSelection(role.role)}
                        >
                            {role.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DropdownRoles;