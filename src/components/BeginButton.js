import { useNavigate } from 'react-router-dom'

const BeginButton = () => {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="self-center bg-white text-black font-bold uppercase h-12 w-80 hover:shadow-lg focus:shadow-lg shadow-md
                    rounded-full transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
      onClick={() => navigate('/1`')}
    >
      Begin
    </button>
  )
}

export default BeginButton
