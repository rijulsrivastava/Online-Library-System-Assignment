import { useSelector } from "react-redux";
import Book from "./Book";

function BookList() {

    const books = useSelector((store) => store.book.items)

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {books.map(book => {
                return (
                    <Book book={book}/>
                )
            })
            }
        </div>
    )
}

export default BookList;