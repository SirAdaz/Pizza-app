"use client"

import React from 'react'
import { GiFullPizza } from "react-icons/gi";
import { FaPizzaSlice, FaHome, FaShoppingCart  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { useRouter } from "next/navigation";


interface NavProps {
    cartQuantity: number
}

const Nav: React.FC<NavProps> = ({ cartQuantity }) => {

    const router = useRouter();

    const menu = [
        {name: "Home", icon: <FaHome />},
        {name: "Nos pizzas", icon: <FaPizzaSlice />},
        {name: "Contact", icon: <IoIosMail />}
    ]

  return (
    <nav className='fixed z-100 shadow-md w-full bg-white h-50 flex justify-between items-center p-5 text-stone-700'>
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => router.push('/')}>
            <GiFullPizza className='text-orange-700 text-2xl'/>
            <span className="font-black">Go pizza</span>
        </div>
        <ul className="hidden md:flex items-center gap-4">
            {menu.map((item, index) => (
                <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-orange-700 hover:underline'>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
        <button className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 flex items-center gap-2">
            <FaShoppingCart />
            <span>{cartQuantity}</span>
        </button>
    </nav>
  )
}

export default Nav
