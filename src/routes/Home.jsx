import React from "react";
import { Link } from "react-router-dom";
import './home.css'

function Home(){
    return(
        <div className="Back-page">
            <div className="Home-Page">
                <div className="Title">
                    <h1>Welcome to BookHive!</h1>
                </div>
                <div className="Question">
                    <h2>What is BookHive?</h2>
                </div>
                <div className="Answer">
                BookHive is a community-driven platform that connects book lovers, enabling them to lend and borrow books from nearby users. By sharing their personal collections, users can discover new reads, explore diverse genres, and build meaningful connections. Whether you're looking to borrow a rare find or lend a favorite book, BookHive makes it easy to share the joy of reading, one book at a time.
                </div>

                <Link to= '/Lend' className="hyper"><button type="button" className="lend">Lend Books</button></Link>
                <Link to= '/rent' className="hyper"><button type="button" className="rent">Rent Book</button></Link>
            </div>
        </div>
    )
}

export default Home;