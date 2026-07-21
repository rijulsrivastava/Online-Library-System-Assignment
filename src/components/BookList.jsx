import Book from "./Book";

function BookList({books}= []) {

    return (
        <div className="flex flex-wrap p-8 gap-12 justify-center">
            {/* below will display book component for each book added to the store */}
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