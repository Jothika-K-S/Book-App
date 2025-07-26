import FormData from "./FormData"
import FormHeader from "./FormHeader"

const FormContainer = () => {
    return(
        <>
        <FormHeader  />
        <form className='grid gap-y-6 p-7 my-7 mx-auto shadow-xl w-1/2 rounded-xl'>
            <FormData/>
        </form>
        </>
    )
}

export default FormContainer