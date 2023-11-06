import Image from "next/image";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        onSearch(value); // Pass the input value to the parent component
    };

    return (
        <div className="flex my-8 mx-auto items-center relative md:w-3/5 opacity-80 focus-within:opacity-100">
            <div className="absolute left-2 bg-dark-100 rounded-full p-1.5">
                <Image src="/search.svg" width="20" height="20" alt="" />
            </div>
            <input
                type="search"
                className="w-full pl-11 py-3 rounded-full bg-transparent border-2 text-gray-200 font-medium placeholder-gray-200 border-dark-200 bg-dark-200 outline-none shadow-xl"
                placeholder="Search champion"
                value={searchText}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;