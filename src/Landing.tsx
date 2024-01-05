import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Portofolio from "./Pages/Portofolio";

export default function LandingPage() {

    return (
        <div className="relative h-full w-full bg-[#302424] flex flex-col justify-start">
            <div className="h-screen">
                <Home />
            </div>
            <div className="h-screen">
                <Resume />
            </div>
            <div className="h-screen">
                <Portofolio />
            </div>
        </div>
    )
}