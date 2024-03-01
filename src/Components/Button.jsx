import { Link } from "react-router-dom";

const Button = ( props ) => {
    return (
        <Link to="/makepayment" relative="path">
            <button id={props.id} className="rounded border-solid border-2 border-secondary-0 px-[.8rem] xsm:px-[1rem] py-[.2rem] lsm:py-[.3rem] xsm:py-[.5rem] text-[.6rem] lsm:text-[.8rem] xsm:text-[1rem] font-Inter text-secondary-0 font-medium hover:bg-secondary-0 hover:text-white transition ease-in-out delay-100">
                {props.value}
            </button>
        </Link>
    )
}

export default Button