// import React, { useState } from 'react';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { BookOpen } from 'lucide-react';

// const bookData = {
//   "9780312577223": [
//     "The Nightingale",
//     "Historical Fiction",
//     "Kristin Hannah",
//     1327.17,
//     "https://images.isbndb.com/covers/72/23/9780312577223.jpg",
//     "The Nightingale tells the story of two sisters living in Nazi-occupied France during World War II, and their struggle for survival and resistance.",
//   ],
//   "9780142410387": [
//     "The BFG",
//     "Children's Fiction",
//     "Roald Dahl",
//     663.17,
//     "https://images.isbndb.com/covers/03/87/9780142410387.jpg",
//     "The BFG is a story about a Big Friendly Giant who teams up with a young orphan girl, Sophie, to save the world from evil giants.",
//   ],
//   // ... other books
// };

// const BookCard = ({ title, author, genre, price, coverUrl, description }) => (
//   <Card className="w-64 h-96 flex flex-col justify-between">
//     <CardHeader>
//       <img src={coverUrl} alt={title} className="w-full h-40 object-cover" />
//       <CardTitle className="text-lg font-bold truncate">{title}</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <p className="text-sm text-gray-600">{author}</p>
//       <p className="text-xs text-gray-500">{genre}</p>
//       <p className="text-sm font-semibold mt-2">₹{price.toFixed(2)}</p>
//     </CardContent>
//     <CardFooter>
//       <Button className="w-full">
//         <BookOpen className="mr-2 h-4 w-4" /> Borrow
//       </Button>
//     </CardFooter>
//   </Card>
// );

// const BookLendingPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredBooks = Object.entries(bookData).filter(([, bookInfo]) =>
//     bookInfo[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
//     bookInfo[2].toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Book Lending Library</h1>
//       <input
//         type="text"
//         placeholder="Search books or authors..."
//         className="w-full p-2 mb-4 border rounded"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredBooks.map(([isbn, bookInfo]) => (
//           <BookCard
//             key={isbn}
//             title={bookInfo[0]}
//             author={bookInfo[2]}
//             genre={bookInfo[1]}
//             price={bookInfo[3]}
//             coverUrl={bookInfo[4]}
//             description={bookInfo[5]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookLendingPage;