import logo from "../../assets/logo.png";
const Navbar = ({ totalCoin }) => {
    return (
        <nav className="w-ful md:w-[1300px] mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="logo" className="w-10 mr-2" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="none gap-5 items-center md:flex">
                        <li className="cursor-pointer"><a>Home</a></li>
                        <li className="cursor-pointer"><a>Fixture</a></li>
                        <li className="cursor-pointer"><a>Teams</a></li>
                        <li className="cursor-pointer"><a>Schedules</a></li>
                        <button  className="btn block">{totalCoin} </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;