import React from "react";
import './SplHeader.css';
import { useState } from "react";
import { Link } from "react-router-dom";


function SplHeader(){
    return(
        
            <header>
                <div className="Header_bar">
            
                <Link to= '/home' className="hyper"><div className="Header-name">BookHive</div></Link>
                <Link to= '/Lend' className="hyper"> <button type="button" className="Header-lend">Lend Books</button></Link>
                <Link to= '/Rent' className="hyper"><button type="button" className="Header-rent">Rent Book</button></Link>
                </div>
            </header>
        
    );
}

export default SplHeader;
export const useSearch = () => {
    const [search, setSearch] = useState("");
    return { search, setSearch };
};