import React, { useState, useEffect } from 'react';
import { database } from '../server/config/firebase';
import { ref, get } from 'firebase/database';
import './Find.css';


const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState({});
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch books from Firebase on component mount
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksRef = ref(database, 'books');
                const snapshot = await get(booksRef);
                
                if (snapshot.exists()) {
                    const booksData = snapshot.val();
                    setBooks(booksData);
                    setFilteredBooks(Object.entries(booksData));
                } else {
                    setError("No books found in database");
                }
            } catch (err) {
                setError("Error fetching books: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        
        const results = Object.entries(books).filter(([isbn, details]) => {
            const [title, genre, author] = details;
            return (
                title.toLowerCase().includes(query.toLowerCase()) ||
                author.toLowerCase().includes(query.toLowerCase()) ||
                genre.toLowerCase().includes(query.toLowerCase())
            );
        });

        setFilteredBooks(results);
    };

    const handleRent = (isbn) => {
        setSelectedBook(books[isbn]);
    };

    const handleBack = () => {
        setSelectedBook(null);
    };

    if (loading) {
        return <div className="loading">Loading books...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (selectedBook) {
        const [title, genre, author, price, image, description, owners] = selectedBook;
        return (
            <div className="book-details">
                <button onClick={handleBack} className="back-button">Back to Search</button>
                <div className="book-card">
                    <div className="book-header">
                        <div className="book-image-container">
                            <img src={image} alt={title} className="book-image" />
                        </div>
                        <div className="book-summary">
                            <h2>{title}</h2>
                            <p><strong>Author:</strong> {author}</p>
                            <p><strong>Genre:</strong> {genre}</p>
                            <p><strong>Price:</strong> Rs. {price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="book-details-content">
                        <h3>Description</h3>
                        <p className="description">{description}</p>
                        <h3>Owner Details</h3>
                        {Object.entries(owners).map(([id, [name, location, rating]]) => (
                            <div key={id} className="owner-details">
                                <h4>{name}</h4>
                                <p><strong>Location:</strong> {location}</p>
                                <p><strong>Rating:</strong> {rating}/5</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="Find-page">
            <h1 className="find">Book Search</h1>
            <input
                type="text"
                className="Search"
                placeholder="Search for a book..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="book-container">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(([isbn, details]) => {
                        const [title, genre, author, price, image] = details;
                        return (
                            <div key={isbn} className="card find">
                                <div className="book-thumbnail-container">
                                    <img src={image} alt={title} className="book-thumbnail" />
                                </div>
                                <div className="book-info">
                                    <h2>{title}</h2>
                                    <p><strong>Author:</strong> {author}</p>
                                    <p><strong>Genre:</strong> {genre}</p>
                                    <p className="find"><strong>Price:</strong> Rs. {price.toFixed(2)}</p>
                                    <button onClick={() => handleRent(isbn)} className="rent-button">
                                        Rent
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="no-books find">No books found.</p>
                )}
            </div>
        </div>
    );
};

export default App;