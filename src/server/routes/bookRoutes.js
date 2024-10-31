import express from 'express';
import { ref, get, set } from 'firebase/database';
import { db } from '../config/firebase.js';
import { openai } from '../config/openai.js';

const router = express.Router();

router.get('/books/:isbn', async (req, res) => {
  try {
    const bookRef = ref(db, `books/${req.params.isbn}`);
    const snapshot = await get(bookRef);

    res.json({
      exists: snapshot.exists(),
      data: snapshot.exists() ? snapshot.val() : null
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check book existence' });
  }
});

router.post('/books/owner', async (req, res) => {
  try {
    const { isbn, ownerData } = req.body;
    const bookRef = ref(db, `books/${isbn}`);
    const snapshot = await get(bookRef);

    if (!snapshot.exists()) {
      return res.status(404).json({ error: 'Book not found' });
    }

    const currentData = snapshot.val();
    const updatedOwners = {
      ...currentData[6],
      ...ownerData
    };

    currentData[6] = updatedOwners;
    await set(bookRef, currentData);

    res.json({
      message: 'Owner added successfully',
      data: currentData
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add owner' });
  }
});

router.post('/books/generate', async (req, res) => {
  try {
    const { isbn } = req.body;
    const isbnResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const isbnData = await isbnResponse.json();

    let bookInfo = {};
    
    if (isbnData.items?.[0]) {
      const volumeInfo = isbnData.items[0].volumeInfo;
      bookInfo = {
        title: volumeInfo.title,
        author: volumeInfo.authors?.[0] || 'Unknown',
        genre: volumeInfo.categories?.[0] || 'Fiction',
        pages: volumeInfo.pageCount || 0,
        coverUrl: volumeInfo.imageLinks?.thumbnail || '',
        description: volumeInfo.description || ''
      };
    } else {
      console.log("GPT");
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5",
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant that generates plausible book information. Provide real data."
            },
            {
                role: "user",
                content: `Generate plausible book information for ISBN ${isbn} in JSON format with these fields: title, author, genre, price in inr , coverUrl, description (2-3 sentences) `
            }
        ],
        temperature: 0.7
    })

      bookInfo = JSON.parse(completion.choices[0].message.content);
    }

    res.json(bookInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate book information' });
  }
});

router.post('/books', async (req, res) => {
  try {
    const { isbn, bookData } = req.body;
    const bookRef = ref(db, `books/${isbn}`);
    await set(bookRef, bookData);

    res.json({
      message: 'Book added successfully',
      data: bookData
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add book' });
  }
});

export default router;