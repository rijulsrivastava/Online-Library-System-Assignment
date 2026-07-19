import { useSelector } from "react-redux";
import Book from "./Book";

function BookList({books}= []) {

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {books.map(book => {
                return (
                    <Book key={book.id} book={book}/>
                )
            })
            }
        </div>
    )
}

export default BookList;