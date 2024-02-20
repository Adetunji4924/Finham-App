import { Link } from "react-router-dom";
// import {HashLink} from "react-router-hash-link"

const Login = () => {
    return (
        <div className="min-h-screen flex gap-8">
            <div className="bg-sidebar bg-no-repeat bg-cover flex flex-col justify-between px-[2rem] py-[5rem]">
                <div>
                    <img src="./src/images/MASTERLOGO (white) 2.png" alt="" />
                </div>
                <div className="w-[75%]">
                    <h1 className="font-Bricolage text-[2.5rem] text-white font-bold">Manage multiple tuition payments.</h1>
                    <p className="font-Inter text-[1rem] text-gray-200">Manage tuition payments for multiple applicants, track payments with ease.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[50%]">
                <div className=" w-[50%] mb-8">
                    <h1 className="text-center text-[2rem] font-Bricolage font-bold text-gray-800">Log in</h1>
                    <p className="text-center text-[0.8rem] font-Bricolage">Log into your agent account to make student tuition payments, its free and easy!</p>
                </div>
                <form action="" className="w-[60%]">
                    <div>
                        <label htmlFor="email" className="block  text-gray-800 text-[1rem] font-Bricolage font-medium mb-2">Email Address</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-3 px-5 mb-6 font-Inter text-[12px] text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-800 text-[1rem] font-Bricolage font-medium mb-2">Password</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-3 px-5 mb-6 text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
                            id="password"
                            placeholder="******************" 
                            />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-secondary-0 w-full px-4 py-2 rounded text-white text-[1rem] font-Bricolage font-medium">Login</button>
                    </div>
                </form>

                <hr className="w-[55%] flex justify-center items-center bg-gray-500 mt-8"/>

                <div className="flex justify-center flex-col items-center">
                    <p className="text-center font-Inter text-[.8rem] font-semibold mt-4">Don’t have an account?</p>
                    <Link to="" relative="path" className="text-secondary-0 font-Inter text-[.8rem] font-medium underline">Create Account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login