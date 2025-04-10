

import { useFormStatus } from "react-dom"



const SubmitButton = () => {

    const { pending } = useFormStatus()

  return (
    <button disabled={pending} className="p-2 capitalize rounded-sm bg-green-600 text-white w-full">
    register
  </button>
  )
}

export default SubmitButton