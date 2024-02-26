// import { useState } from "react"

const Hero = () => {
    return (
        <div className="bg-herowave bg-cover bg-center bg-no-repeat md:px-[5rem] px-[1rem] py-[3rem] md:py-[5rem] flex flex-wrap md:flex-nowrap justify-between items-center gap-[1rem] lg:gap-[3rem]">
            <div className="md:w-[50%]">
                <img className="w-[70%]" src="src/images/Frame 6.svg" alt="" />
                <div>
                    <h1 className="font-Bricolage text-[2rem] md:text-[3rem] lg:text-[4rem] mt-4 md:mt-0 font-semibold text-gray-800">Effortless Tuition Fee Payments on a <span className="text-secondary-0 font-bold bg-ellipse bg-contain bg-center bg-no-repeat">Global</span> Scale.</h1>
                    <p className="font-Inter text-[.9rem] md:text-[1rem] text-gray-600">The preferred financial partner for students and institutions worldwide, fostering trust and seamless transactions for millions around the globe.</p>
                </div>
                <div className="my-[2rem]">
                    <div className="flex justify-start items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#EEF5FE"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.234 9.0551C12.9701 9.0551 13.5668 9.65183 13.5668 10.3879C13.5668 11.124 12.9701 11.7208 12.234 11.7208C11.4979 11.7208 10.9011 11.124 10.9011 10.3879C10.9011 9.65183 11.4979 9.0551 12.234 9.0551ZM12.5668 10.3879C12.5668 10.2041 12.4178 10.0551 12.234 10.0551C12.0502 10.0551 11.9011 10.2041 11.9011 10.3879C11.9011 10.5717 12.0502 10.7208 12.234 10.7208C12.4178 10.7208 12.5668 10.5717 12.5668 10.3879Z" fill="#1F39C4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.56982 8.97302C7.56982 7.86845 8.46525 6.97302 9.56982 6.97302H14.8981C16.0027 6.97302 16.8981 7.86845 16.8981 8.97302V11.8028C16.8981 12.0753 16.8436 12.3351 16.745 12.5718L16.6049 13.6017C16.5494 14.0093 16.3764 14.3682 16.1265 14.652C16.1199 14.6727 16.1118 14.6932 16.1023 14.7133L15.6285 15.7176C15.0954 16.8475 13.6684 17.2175 12.6535 16.489L8.35858 13.4062C8.32241 13.3802 8.29073 13.3503 8.26372 13.3175C7.83878 12.9508 7.56982 12.4082 7.56982 11.8028V8.97302ZM14.8981 13.8028C15.1288 13.8028 15.3504 13.7638 15.5565 13.6919C15.375 14.1652 14.8529 14.4413 14.3423 14.2919L12.6705 13.8028H14.8981ZM8.91971 8.21316C8.70555 8.39656 8.56982 8.66894 8.56982 8.97302V11.8028C8.56982 12.1069 8.70554 12.3793 8.91971 12.5627C8.85653 12.479 8.81907 12.3748 8.81907 12.2618C8.81907 11.9857 9.04293 11.7618 9.31907 11.7618H10.1519C10.428 11.7618 10.6519 11.9857 10.6519 12.2618C10.6519 12.5379 10.428 12.7618 10.1519 12.7618H9.31907C9.30608 12.7618 9.2932 12.7613 9.28045 12.7603C9.37205 12.788 9.4692 12.8028 9.56982 12.8028H14.8981C14.9988 12.8028 15.0959 12.788 15.1875 12.7603C15.1748 12.7613 15.1619 12.7618 15.1489 12.7618H14.3161C14.0399 12.7618 13.8161 12.5379 13.8161 12.2618C13.8161 11.9857 14.0399 11.7618 14.3161 11.7618H15.1489C15.425 11.7618 15.6489 11.9857 15.6489 12.2618C15.6489 12.3748 15.6114 12.479 15.5482 12.5627C15.7624 12.3793 15.8981 12.1069 15.8981 11.8028V8.97302C15.8981 8.66894 15.7624 8.39657 15.5482 8.21316C15.6114 8.29688 15.6489 8.40109 15.6489 8.51406C15.6489 8.7902 15.425 9.01406 15.1489 9.01406H14.3161C14.0399 9.01406 13.8161 8.7902 13.8161 8.51406C13.8161 8.23792 14.0399 8.01406 14.3161 8.01406H15.1489C15.1619 8.01406 15.1748 8.01456 15.1875 8.01553C15.0959 7.98788 14.9988 7.97302 14.8981 7.97302H9.56982C9.4692 7.97302 9.37205 7.98788 9.28045 8.01553C9.2932 8.01456 9.30608 8.01406 9.31907 8.01406H10.1519C10.428 8.01406 10.6519 8.23792 10.6519 8.51406C10.6519 8.7902 10.428 9.01406 10.1519 9.01406H9.31907C9.04293 9.01406 8.81907 8.7902 8.81907 8.51406C8.81907 8.40109 8.85653 8.29688 8.91971 8.21316ZM14.7039 15.3315C14.4932 15.3399 14.2768 15.3147 14.0615 15.2517L11.6698 14.552L13.2366 15.6766C13.7317 16.032 14.423 15.8646 14.7039 15.3315Z" fill="#1F39C4"/>
                        </svg>
                        <p className="text-gray-500 font-Inter text-[.8rem]">Pay Tuition fees in your local currency</p>
                    </div>
                    <div className="flex justify-start items-center gap-2 mt-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#EEF5FE"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 7.96166C12.5 7.31639 11.6208 7.12595 11.3538 7.71338L9.10908 12.6517C8.92851 13.049 9.21892 13.5 9.6553 13.5H11.5V16.0383C11.5 16.6836 12.3792 16.874 12.6462 16.2866L14.8909 11.3483C15.0715 10.951 14.7811 10.5 14.3447 10.5H12.5V7.96166ZM10.2765 12.5L11.5 9.8083V10.9C11.5 11.2314 11.7686 11.5 12.1 11.5H13.7235L12.5 14.1917V13.1C12.5 12.7686 12.2314 12.5 11.9 12.5H10.2765Z" fill="#1F39C4"/>
                        </svg>
                        <p className="text-gray-500 font-Inter text-[.8rem]">Fast, Simple and Effective </p>
                    </div>
                </div>
                <div>
                    <form action="">

                    </form>
                </div>
            </div>
            <div className="w-auto">
                <img src="src/images/Hero Image.png" alt="" />
            </div>
        </div>
    )
}

export default Hero

// const Select = ({options, value, onchange}) => {
//     const [search, setSearch] = useState("");
//     const [open, setOpen] = useState(false);

//     const
// }