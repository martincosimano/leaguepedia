import React, { useState } from "react";

const DropdownRoles = ({ handleSelection, selected, roleButtons }) => {

    const handleRoleSelection = (role) => {
        handleSelection(role);
    };

    return (
        <nav className="absolute mt-8 z-10 bg-dark-150 w-2/3 opacity-90 rounded-sm p-2">
            <ul className="flex flex-col gap-0.5">
                {roleButtons.map((roleButton) => (
                    <li key={roleButton.role}>
                        <button
                            className={`text-md font-medium uppercase w-full text-start px-2 focus:text-gold-100 focus:bg-dark-100 ${
                                selected[roleButton.role] && "text-gold-100 bg-dark-100"
                            }`}
                            onClick={() => handleRoleSelection(roleButton.role)}
                        >
                            {roleButton.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DropdownRoles;