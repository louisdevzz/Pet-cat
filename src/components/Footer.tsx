import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { GiOpenTreasureChest } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { BsBrowserSafari } from "react-icons/bs";
import { useState } from "react";


const Footer = () =>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const listItems = [
        {
            url:"/",
            icon: <IoHome color="white" size={35}/>
        },
        {
            url:"#",
            icon: <GiOpenTreasureChest color="white" size={35}/>
        },
        {
            url:"#",
            icon: <FaStore color="white" size={35}/>
        },
        {
            url:"#",
            icon: <BsBrowserSafari color="white" size={35}/>
        }
    ]

    return(
        <div className="w-full absolute mt-2 bottom-0 bg-[#1b434b] h-16 rounded-lg">
            <div className="w-full">
                <div className="flex flex-row justify-between w-full px-5 py-2">
                    {listItems.map((item:any,idx:number)=>(
                        <Link onClick={()=>setCurrentIndex(idx)} href={item.url} className={`p-2 ${currentIndex==idx?"bg-[#ffffff31]":""} hover:bg-[#ffffff31] rounded-lg`}>
                            {item.icon}
                        </Link>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;