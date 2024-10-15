import React from "react";
import './SplHeader.css';


function SplHeader(){

    return(
        
            <header>
                <div className="Header_bar">
            
                <div className="Header-name">BookHive</div>
                <div className="Header-lend">Lend Books</div>
                <div className="Header-rent">Rent Books</div>
                    
                </div>
            </header>
        
    );
}

export default SplHeader;