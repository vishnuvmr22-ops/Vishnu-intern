import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="mx-3 my-2 flex justify-around rounded-2xl bg-blue-400 p-4 text-xl text-amber-50">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
