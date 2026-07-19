import { useSelector } from "react-redux";

function Book(book) {

    return (
        <div className="relative w-[300px] h-[400px] overflow-hidden rounded-2xl">
            <div className="absolute">
                <img src={book.book.coverImage} alt="" />
            </div>
            <div className="flex flex-col justify-between backdrop-blur-[2px] h-[400px]">
                <div className="bg-black/20 py-2 px-6">
                    <h2 >{book.book.title}</h2>
                    <h3>written by {book.book.author}</h3>
                </div>
                <p className="bg-black/20 py-2 px-6">{book.book.description}</p>
                <div className="bg-black/20 py-2 px-6yy">
                    <h2>{book.book.category}</h2>
                    <p>View Details</p>
                </div>
            </div>
        </div>
    )
}

export default Book;