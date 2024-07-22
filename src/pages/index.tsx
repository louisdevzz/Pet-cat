'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { FaBitcoin } from "react-icons/fa";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemTabs = ["Farm","PvE","PvP"]

  return (
    <div className="flex flex-row items-center justify-center w-full min-h-screen md:h-screen overflow-y-auto">
      <div className="w-[400px] h-[780px] bg-white rounded-lg shadow-md relative">
        <Header/>
        <div className="h-[660px] overflow-auto">
          <div className="mt-5 px-2 ">
            <div className="flex flex-row justify-between bg-[#cbd9da]  px-5  py-2 rounded-lg ">
              {itemTabs.map((item:any,idx:number)=>(
                <button key={idx} onClick={()=>setCurrentIndex(idx)} className={`px-4 py-1 ${currentIndex==idx&&"bg-[#ffffffbb]"} transition-all rounded-lg`}>
                  <span>{item}</span>
                </button>
              ))}
            </div>
          </div>
          {currentIndex==0&&(
            <div className="mt-4 px-2">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm">Total Spend</span>
                  <div className="flex flex-row gap-2 items-center">
                    <FaBitcoin size={17}/>
                    <span className="text-xl">0</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm">BPET Can claim</span>
                  <div className="flex flex-row gap-2 items-center">
                    <FaBitcoin size={17}/>
                    <span className="text-xl">0</span>
                  </div>
                </div>
                <button className="bg-[#1b434b] px-3 py-2 rounded-lg h-10 hover:bg-opacity-80">
                  <small className="text-white">Claim</small>
                </button>
              </div>
              <div className="mt-10">
                <div className="border-2 border-[#cbd9da] rounded-lg relative">
                  <img className="rounded-lg" src="/assets/background.jpg" alt="background" />
                  <img width={90} className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-lg" src="/assets/item/factory.gif" alt="item" />
                </div>
                <div className="mt-5 flex flex-row gap-5">
                  <div className="border border-[#cbd9da] bg-[#cbd9da] rounded-2xl p-6 flex h-44 w-52 relative items-center">
                    <div className="absolute top-2 left-2 p-1 rounded-lg bg-[#fff]">
                      <span>Lv 4</span>
                    </div>
                    <img width={90} className="rotate w-28 h-20 mt-4" src="/assets/pet/pet-2.gif" alt="pet" />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <span>Tiny Cat</span>
                    <div className="flex flex-row gap-1">
                      <img width={20} src="/assets/icon/heart.svg" alt="icon" />
                      <img width={20} src="/assets/icon/heart.svg" alt="icon" />
                      <img width={20} src="/assets/icon/heart.svg" alt="icon" />
                    </div>
                    <div className="flex flex-row gap-1 mt-1">
                      <button className="p-3 h-12 w-12 bg-[#1b434b] hover:bg-opacity-85 rounded-lg flex justify-center">
                        <img width={20} src="/assets/icon/apple.svg" alt="icon" />
                      </button>
                      <button className="p-3 h-12 w-12 bg-[#1b434b] hover:bg-opacity-85 rounded-lg flex justify-center">
                        <img width={20} src="/assets/icon/needle.svg" alt="icon" />
                      </button>
                      <button className="p-3 h-12 w-12 bg-[#1b434b] hover:bg-opacity-85 rounded-lg flex justify-center">
                        <img width={20} src="/assets/icon/tree.svg" alt="icon" />
                      </button>
                      <button className="p-3 h-12 w-12 bg-[#1b434b] hover:bg-opacity-85 rounded-lg flex justify-center">
                        <img width={35} src="/assets/icon/wear.svg" alt="icon" />
                      </button>
                    </div>
                    <div className="w-full">
                      <button className="flex flex-row gap-3 items-center w-full bg-[#1b434b] px-3 py-2 rounded-lg justify-center text-[#fff]">
                        <img width={18} src="/assets/icon/arrow-up.svg" alt="icon" />
                        <span className="font-semibold">Upgrade</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-row">
                  <div className="w-32 h-32 rounded-lg relative cursor-pointer">
                    <img width={100} className="w-24 h-24 rounded-lg border border-gray-200  shadow-md" src="/assets/background.jpg" alt="background" />
                    <img width={60} className="absolute top-0 w-24 h-24 backdrop-blur-sm rounded-lg" src="/assets/item/factory.gif" alt="item" />
                  </div>
                  <div className="w-24 h-24 bg-[#cbd9da] flex items-center justify-center rounded-lg relative cursor-pointer">
                    <div className="absolute top-1 left-1 h-7 w-10 rounded-lg bg-[#fff]">
                      <small className="text-[0.6rem] ml-2 -mt-2">Lv 4</small>
                    </div>
                    <img width={30} className="rotate w-14 h-18 mt-4" src="/assets/pet/pet-2.gif" alt="pet" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;