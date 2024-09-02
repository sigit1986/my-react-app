import { FaDumbbell } from "react-icons/fa"
import { NavbarMenu } from "../../mockData/data"
import { CiSearch } from "react-icons/ci"
import { PiShoppingCartThin } from "react-icons/pi"
import { MdMenu } from "react-icons/md"

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-8">
        {/* Logo */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <FaDumbbell />
          <p>Coders</p>
          <p className="text-secondary">Gym</p>
        </div>
        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => {
              return (
                <li key={menu.id}>
                  <a href={menu.link} className="hover:text-primary font-semibold">{menu.title}</a>
                </li>
              )}
            )}
          </ul>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiSearch />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <PiShoppingCartThin />
          </button>
          <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary
          px-6 py-2 duration-200 hidden md:block">
            Login
          </button>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <MdMenu className="text-4xl"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar