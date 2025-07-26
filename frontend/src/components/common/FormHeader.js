import {useParams} from 'react-router-dom'

const FormHeader = () => {
    const {id} = useParams()
    console.log(id)
    return(
        <div className="flex justify-center mt-8">
            <h1 className="text-4xl font-bold text-orange-500">{id ? 'Update Book Details' : 'Add a Book'}</h1>
        </div>
    )
}

export default FormHeader