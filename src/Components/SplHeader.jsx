import React from "react";
import './SplHeader.css';
import { useState } from "react";
import { Link } from "react-router-dom";


function SplHeader(){
    return(
        
            <header>
                <div className="Header_bar">
            
                <div className="Header-name">BookHive</div>
                <button type="button" className="Header-lend">Lend Books</button>
                <button type="button" className="Header-rent">Rent Books</button>
                <div className="Header-search">
                   <div className="Search">
                        <label id ="label" for="Search">Search</label>
                        <input className= "Search-Bar"type="text" placeholder="  Book Name"></input>
                        <button type="button" className="Submit-button">🔎</button>
                    </div> 
                </div>
                </div>
            </header>
        
    );
}

export default SplHeader;
export const useSearch = () => {
    const [search, setSearch] = useState("");
    return { search, setSearch };
};