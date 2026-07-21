import { Link } from "react-router-dom"

function Book(props) {

    return (
        <div className="relative w-[300px] h-[400px] overflow-hidden rounded-2xl shadow-[5px_5px_10px_#e6bc8f80]">
            <div className="absolute object-cover ">
                <img src={props.book.coverImage} alt="" />
            </div>
            <div className="flex flex-col justify-around backdrop-blur-[2px] h-[400px]">
                <div className="bg-[#e6bc8f40] py-1 px-6 h-[100px] flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-black">{props.book.title}</h2>
                    <h3 className="text-sm text-black">written by {props.book.author}</h3>
                </div>
                {/* <p className="bg-black/20 py-2 px-6">{props.book.description}</p> */}
                <div className="flex flex-col content-between  py-2 ">
                    <h2 className="text-black bg-[#e6bc8f40] text-center text-lg font-bold">{props.book.category}</h2>

                    {/* Link is used to dynamically navigate to book detail page of a particular book */}
                    <Link to={`/bookDetails/${props.book.id}`} className=" border self-end translate-y-[50px] mx-4 p-1 px-2 rounded-xl bg-[#24392f] hover:scale-105">
                        {/* {console.log(props.book.id)} */}
                        <p>View Details...</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Book;