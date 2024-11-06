import React from "react";
import './SplHeader.css';
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";


function SplHeader(){

    const nav = useNavigate();
    return(
        
            <header>
                <div className="Header_bar">
            
                <Link to= '/' className="hyper"><div className="Header-name">BookHive</div></Link>
                <button type="button" className="Header-lend" onClick={()=>nav("/Lend")}>Lend Books</button>
                <button type="button" className="Header-rent" onClick={()=>nav("/rent")}>Rent Books</button>
                </div>
            </header>
        
    );
}

export default SplHeader;
export const useSearch = () => {
    const [search, setSearch] = useState("");
    return { search, setSearch };
};