import BookCard from "./BookCard"
import { useEffect, useState } from "react"


const BookContainer = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchAllBooks = async() => {
            const bookData = await fetch('http://localhost:3500/api/books')
            const {data} = await bookData.json()
            console.log(data)
            setBooks(data)
        };
        fetchAllBooks();
    },[])


    return(
        <div className="grid grid-cols-4 gap-10">
            {
                books.map(book => <BookCard key={book._id} book={book}/>)
            }
        </div>
    )
}

export default BookContainer