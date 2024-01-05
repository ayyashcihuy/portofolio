import NavigationBar from "../Components/Navbar";

export default function Portofolio() {
    return (
        <div className="relative max-h-screen bg-white">
            <div className="absolute w-full h-screen bg-gradient-to-t from-black via-gray-800 to-black" />
            <div className="flex flex-col justify-between absolute text-white font-sans-serif font-light w-full h-full p-10 gap-y-8">
                <NavigationBar />
                <div className="flex flex-col items-start justify-between w-full gap-y-2">
                    <h1 className="text-3xl font-bold tracking-widest">PORTOFOLIO</h1>
                    <div className="flex flex-row w-full gap-x-8 mt-5">
                        <div className="flex flex-col gap-y-5 w-full">
                            <div className="flex flex-row gap-x-8 w-full">
                                <div className="w-52 h-52 bg-white flex items-center justify-center">
                                    <p className="text-black">no preview available!</p>
                                </div>
                                <div className="flex flex-col gap-y-4 justify-between w-2/3">
                                    <h1 className="text-xl font-bold text-white tracking-widest">Panin Sekuritas - User Data Update</h1>
                                    <div>
                                        <h1 className="text-lg font-bold text-white tracking-widest">Description :</h1>
                                        <p className="font-light text-sm">Fullstack based Application for user to update data based on OJK Regulation. For backend, using node js, typescript, prisma as orm, express, mailhog, and vitest as unit testing. For frontend, using react vite, redux, and tailwind css package</p>
                                    </div>
                                    <button className="border border-white p-2 hover:opacity-50 transition duration-200">Link</button>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-8">
                                <div className="w-52 h-52 bg-white flex items-center justify-center">
                                    <p className="text-black">no preview available!</p>
                                </div>
                                <div className="flex flex-col gap-y-4 justify-between w-2/3">
                                    <h1 className="text-xl font-bold text-white tracking-widest">Panin Sekuritas - Data feed</h1>
                                    <div>
                                        <h1 className="text-lg font-bold text-white tracking-widest">Description :</h1>
                                        <p className="font-light text-sm">Application API based to provide data for supporting Trading Application such as News and Research Data, Financial Report, Corporate Actions and All Stock Related Data from Pasardana. Using Node Js, Typescript, Express, as based, Jest for testing, Prisma for ORM and eslint for type checking.</p>
                                    </div>
                                    <p className="text-red-700 italic">link is not available due internal project</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-8">
                                <div className="w-52 h-52 bg-white flex items-center justify-center">
                                    <p className="text-black">no preview available!</p>
                                </div>
                                <div className="flex flex-col gap-y-4 justify-between w-2/3">
                                    <h1 className="text-xl font-bold text-white tracking-widest">Panin Sekuritas - Postlog UI</h1>
                                    <div>
                                        <h1 className="text-lg font-bold text-white tracking-widest">Description :</h1>
                                        <p className="font-light text-sm">Frontend based Application for provide latest user activities for internal user. Using node js, express, typecript as based, and Vanila Javascript and basic html for UI.</p>
                                    </div>
                                    <p className="text-red-700 italic">link is not available due internal project</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-y-5">
                            <div className="flex flex-row gap-x-8 w-full">
                                <div className="w-52 h-52 bg-white flex items-center justify-center">
                                    <p className="text-black">no preview available!</p>
                                </div>
                                <div className="flex flex-col gap-y-4 justify-between w-2/3">
                                    <h1 className="text-xl font-bold text-white tracking-widest">Personal Project - Wedding Invitation</h1>
                                    <div>
                                        <h1 className="text-lg font-bold text-white tracking-widest">Description :</h1>
                                        <p className="font-light text-sm">Fullstack based application for my own wedding invitation. For backend, using node js, typescript, Google API and Docker. For frontend, using NextJs. And deploy it using GCP</p>
                                    </div>
                                    <button className="border border-white p-2 hover:opacity-50 transition duration-200">Link</button>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-8">
                                <div className="w-52 h-52 bg-white flex items-center justify-center">
                                    <p className="text-black">no preview available!</p>
                                </div>
                                <div className="flex flex-col gap-y-4 justify-between w-2/3">
                                    <h1 className="text-xl font-bold text-white tracking-widest">Personal Project - Pokuemon</h1>
                                    <div>
                                        <h1 className="text-lg font-bold text-white tracking-widest">Description :</h1>
                                        <p className="font-light text-sm">a pokemon database to make it easier for pokemon player or enthusiast to read and see pokemon data in every series. Backend using 3rd API Pokedex, then the Frontend uses Tailwind CSS, React js, Redux, React-Router, Lottie, and Sweetalert2</p>
                                    </div>
                                    <p className="text-red-700 italic">link is not available due internal project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}