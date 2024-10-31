import React, { useState } from 'react';
import { formatBookData } from '../util/formatters.js';
import './Adder.css';

const BookForm = () => {
  const [formData, setFormData] = useState({
    isbn: '',
    name: '',
    phone: '',
    address: ''
  });

  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const checkAndProcessBook = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const bookCheckResponse = await fetch(`/api/books/${formData.isbn}`);
      if (!bookCheckResponse.ok) {
        throw new Error('Failed to check book existence');
      }
      const bookExists = await bookCheckResponse.json();

      if (bookExists.exists) {
        const addOwnerResponse = await fetch('/api/books/owner', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isbn: formData.isbn,
            ownerData: {
              [formData.phone]: [
                formData.name,
                formData.address,
                4.0
              ]
            }
          })
        });

        if (!addOwnerResponse.ok) {
          throw new Error('Failed to add owner');
        }

        const ownerData = await addOwnerResponse.json();
        setSuccess('Successfully added you as an owner of this book!');
        setBookData(ownerData.data);
      } else {
        const generateResponse = await fetch('/api/books/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ isbn: formData.isbn })
        });

        if (!generateResponse.ok) {
          throw new Error('Failed to generate book data');
        }

        const generatedData = await generateResponse.json();

        const newBookData = [
          generatedData.title,
          generatedData.genre,
          generatedData.author,
          generatedData.pages,
          generatedData.coverUrl,
          generatedData.description,
          {
            [formData.phone]: [
              formData.name,
              formData.address,
              5.0
            ]
          }
        ];

        const addBookResponse = await fetch('/api/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isbn: formData.isbn,
            bookData: newBookData
          })
        });

        if (!addBookResponse.ok) {
          throw new Error('Failed to add book to database');
        }

        const savedData = await addBookResponse.json();
        setSuccess('Successfully added new book and registered you as owner!');
        setBookData(savedData.data);
      }
    } catch (err) {
      setError(err.message || 'An error occurred while processing your request');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkAndProcessBook();
  };

  return (
    <div className="page-wrapper">
      <div className="section-container"> {/* New section div added */}
        <div className="centered-container">
          <div className="form-container">
            <h2 className="form-title">Add New Book</h2>
            
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="isbn">ISBN Number</label>
                <input
                  id="isbn"
                  type="text"
                  value={formData.isbn}
                  onChange={(e) => setFormData(prev => ({ ...prev, isbn: e.target.value }))}
                  placeholder="Enter ISBN number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Enter your address"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">{success}</div>}

              <button type="submit" disabled={loading}>
                {loading ? 'Processing...' : 'Submit'}
              </button>
            </form>

            {bookData && (
              <div className="result-container">
                <h3>Book Information:</h3>
                <pre>
                  {`Title: ${formatBookData(bookData).Title}`}
                  {`\nAuthor: ${formatBookData(bookData).Author}`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
