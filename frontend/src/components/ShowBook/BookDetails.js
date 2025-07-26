import { Link } from "react-router"

const BookDetails = ({showBookDetails}) => {
  const {title,description,author,genre,buy,rating} = showBookDetails
    return(
        <div className="py-5 col-span-2">
        <h2 className="text-7xl font-bold text-black-200">{title}</h2>
        <p className="text-2xl pt-6">{description}</p>
        <ul className="flex mt-9 text-gray-500">
            <li className="text-xl ">{author}</li>
            <li className="px-5">|</li>
            <li className="text-xl">{genre}</li>
        </ul>
        <div className="flex mt-10 items-center justify-between w-1/2">
          <Link className="px-20 py-3 shadow-xl rounded-md bg-orange-500 text-white text-2xl cursor-pointer" to={`${buy}`}>Buy Now</Link>
          <h4 className="border-2 border-green-500 py-3 px-5 rounded-md">⭐ {rating}</h4>
        </div>
      </div>
    )
}

export default BookDetails