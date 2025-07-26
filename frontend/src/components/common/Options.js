import { Link } from "react-router"

const Options = ({ShowOptions, id}) => {
    return(
        (
            ShowOptions ? 
            <div className="grid grid-rows-2 gap-y-2 absolute right-[20px] top-[15px] bg-white px-6 py-3 rounded-lg shadow-lg shadow-orange-100">
                <Link className="hover:text-orange-500 cursor-pointer text-lg" to={`/books/details/${id}`}>View</Link>
                <Link className="hover:text-orange-500 cursor-pointer text-lg" to={`/books/edit/${id}`}>Edit</Link>
                <Link className="hover:text-orange-500 cursor-pointer text-lg" to={`/books/delete/${id}`}>Delete
                </Link>
            </div> : ''
        )
    )
}

export default Options