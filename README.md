# BookHive

BookHive is a web platform for renting and lending books, connecting book enthusiasts and enabling efficient book management. It features a searchable book catalog, a dynamic lending page, and automatic integration of book data via the Google Books API.

It is currently deployed at [BookHive](https://the-book-hive.vercel.app/)

## Features

- **Searchable Book Listings**: Easily search for books by title, author, or other metadata.
- **Dynamic Lending Page**: Streamlined lending and borrowing interface for users.
- **Google Books API Integration**: Automatic retrieval of book details to save time and effort.
- **Real-time Updates**: Firebase integration ensures that changes to the database are reflected instantly.

## Future Plans (In no particular order of priority)

- **Login**: Integrate login and authentication system to improve the lending and renting experience.
- **Cart**: login can help in making of a cart system for each individual user.
- **Payment**: Integrate a payment gateway to safe and secure tranctions to take place.
- **Maps**: Usage of maps to give proximity based books catalogue
- **User interaction**: Integration of user chatting and also rating to improve the trust among the community.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: Firebase (Real-time Database)
- **API Integration**: Google Books API

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Firebase project setup
- Google Books API Key

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/BookHive.git
   cd BookHive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_FIREBASE_DATABASE_URL=your-firebase-database-url
   REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
   REACT_APP_GOOGLE_BOOKS_API_KEY=your-google-books-api-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Visit the application at `http://localhost:3000`.

## Usage

1. **Search for Books**: Use the search bar to find books by title or author.
2. **Lend or Borrow**: Manage your lending/borrowing activities hassle-free through the lending page .

## Project Structure

```
api
├── index.js
├── build
└── node_modules
└── public
    ├── favicon.ico
    ├── index.html
    └── lol.ico
    └── manifest.json
    └── robots.txt
└── src
    └── Components
        ├── Footer.css
        ├── Footer.jsx
        ├── SplHeader.css
        └── SplHeader.jsx
    └── routes
        ├── Adder.css
        ├── Adder.jsx
        ├── Find.css
        ├── Find.jsx
        ├── home.css
        └── Home.jsx
        └── Lend.jsx
    └── server
        ├── firebase.js
        ├── openai.js
        ├── bookRoutes.js
        └── server.js
    └── util
        ├── App.css
        ├── App.js
        ├── index.css
        └── index.js
    ├── .gitattributes
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
    └── vercel.json
```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Google Books API](https://developers.google.com/books)
- [Firebase](https://firebase.google.com/)

---
Feel free to reach out with any questions or suggestions!
