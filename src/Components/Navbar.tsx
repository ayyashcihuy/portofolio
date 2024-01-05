export default function NavigationBar() {
    return (
        <nav className="flex flex-row justify-between">
            <div className="flex flex-row justify-between xl:gap-x-12 gap-x-4 text-lg items-center">
                <h1 className="hover:font-bold transition duration-200 cursor-pointer">Home</h1>
                <h1 className="hover:font-bold transition duration-200 cursor-pointer">Resume</h1>
                <h1 className="hover:font-bold transition duration-200 cursor-pointer">Portofolio</h1>
            </div>
            <div className="flex flex-row justify-between xl:gap-x-12 gap-x-4 text-lg items-center">
                <h1 className="hover:font-bold transition duration-200 cursor-pointer">Hire me!</h1>
            </div>
        </nav>
    )
}