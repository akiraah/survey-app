import { useNavigate } from 'react-router-dom'

const NavButton = ({ navUrl, direction }) => {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded-3xl shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
      onClick={() => navigate(`/${navUrl}`)}
    >
      <p>{direction}</p>
    </button>
  )
}

export default NavButton
