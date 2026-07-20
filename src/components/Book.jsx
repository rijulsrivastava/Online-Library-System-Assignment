import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

function Book(props) {

    return (
        <div className="relative w-[300px] h-[400px] overflow-hidden rounded-2xl">
            <div className="absolute">
                <img src={props.book.coverImage} alt="" />
            </div>
            <div className="flex flex-col justify-between backdrop-blur-[2px] h-[400px]">
                <div className="bg-black/20 py-2 px-6">
                    <h2 >{props.book.title}</h2>
                    <h3>written by {props.book.author}</h3>
                </div>
                <p className="bg-black/20 py-2 px-6">{props.book.description}</p>
                <div className="flex justify-around bg-black/20 py-2 px-6yy">
                    <h2>{props.book.category}</h2>
                    <Link to={`/bookDetails/${props.book.id}`}>
                    {/* {console.log(props.book.id)} */}
                        <p>View Details</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Book;