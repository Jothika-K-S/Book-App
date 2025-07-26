import { useParams } from "react-router"

const Button = ({handleCreateClick}) => {
    const {id} = useParams()
    return (
         <button className="px-20 py-3 shadow-xl rounded-md bg-orange-500 text-white text-xl cursor-pointer hover:bg-orange-200 hover:text-orange-500" onClick={handleCreateClick}>{id ? 'Update Book' : 'Add Book'}</button>
    )
}

export default Button