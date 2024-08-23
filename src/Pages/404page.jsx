// import Header from "../Components/Header";
import PrimaryButton from "../Components/Primary-Button";
import ErrorImage from "../images/404 Error Robot.svg";
import { Link } from "react-router-dom";

const Error404 = () => {
    return(
        <div className="py-8 px-2">
            <div className="flex justify-center items-center">
               <img className="w-full md:w-[35%]" src={ErrorImage} alt="" /> 
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-Bricolage font-semibold text-[2.5rem] text-[#002147]">Page Not Found</h1>
                <p className="font-Inter text-slate-500">This page does not exist or was removed</p>
                <p className="font-Inter text-slate-500 mb-4">We suggest you go back to home</p>
                <Link to="/" relative="path">
                    <PrimaryButton value={"Go back home"}></PrimaryButton>
                </Link>
            </div>
        </div>
    )
}

export default Error404