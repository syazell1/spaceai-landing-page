const NavBar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4">
            <nav className="flex items-center justify-between px-10">
                <p className="text-2xl"><span className="font-semibold">SPACE</span> Ai</p>
                <ul className="flex items-center gap-8">
                    <li>
                        <p className="font-semibold">Login</p>
                    </li>
                    <li>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm lg:text-base font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all whitespace-nowrap hover:cursor-pointer">
                            Get Demo
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;