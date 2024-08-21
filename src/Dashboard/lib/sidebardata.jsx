import { AiFillHome, AiOutlineTransaction, AiFillCreditCard } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";
import { BsCurrencyExchange } from "react-icons/bs";
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
        key: 'exchange-rate',
        label: 'Exchange Rate',
        path: 'exchange-rate',
        icon: <BsCurrencyExchange />

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