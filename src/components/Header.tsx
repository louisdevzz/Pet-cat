import { FaBitcoin } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { IoMdWallet } from "react-icons/io";
import { BsBackpack2Fill } from "react-icons/bs";
import Link from "next/link";

const Header = () =>{
    return(
        <div className="w-full bg-[#1b434b] rounded-lg sticky top-0 z-10">
            <div className="flex flex-row justify-between px-5 py-2">
                <div className="flex flex-row items-center gap-5">
                    <div className="flex flex-row gap-2 items-center">
                        <FaBitcoin color="white" size={20}/>
                        <p className="text-[#fff] font-semibold">13</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center ">
                        <GiTwoCoins  color="white" size={23}/>
                        <p className="text-[#fff] font-semibold">0.13</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <Link href="#" className="hover:bg-[#ffffff31] p-2 rounded-lg">
                        <IoMdWallet color="white" size={23}/>
                    </Link>
                    <Link href={"#"} className="hover:bg-[#ffffff31] p-2 rounded-lg">
                        <BsBackpack2Fill color="white" size={23}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;