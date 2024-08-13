import { AiFillHome, AiOutlineTransaction, AiFillCreditCard } from "react-icons/ai";
import { RiAccountCircleFill, RiSettings5Fill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/makepayment',
        icon: <AiFillHome />
    },

    {
        key: 'transactions',
        label: 'Transactions',
        path: 'transactions',
        icon: <AiOutlineTransaction />
    },

    {
        key: 'accounts',
        label: 'Accounts',
        path: 'transactions',
        icon: <RiAccountCircleFill />
    },

    {
        key: 'cards',
        label: 'Cards',
        path: 'transactions',
        icon: <AiFillCreditCard />
    },

    {
        key: 'services',
        label: 'Services',
        path: 'transactions',
        icon: <GrServices />
    },

    {
        key: 'settings',
        label: 'Settings',
        path: 'transactions',
        icon: <RiSettings5Fill/>
    }
]