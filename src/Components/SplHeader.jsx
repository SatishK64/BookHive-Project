import React from "react";
import './SplHeader.css';
import { useState } from "react";
import { Link } from "react-router-dom";


function SplHeader(){
    return(
        
            <header>
                <div className="Header_bar">
            
                <Link to= '/' className="hyper"><div className="Header-name">BookHive</div></Link>
                <Link to= '/Lend' className="hyper"><button type="button" className="Header-lend">Lend Books</button></Link>
                <Link to= '/rent' className="hyper"><button type="button" className="Header-rent">Rent Books</button></Link>
                </div>
            </header>
        
    );
}

export default SplHeader;
export const useSearch = () => {
    const [search, setSearch] = useState("");
    return { search, setSearch };
};