'use client';
import { LayoutGridIcon, ShoppingBag, ShoppingCart, CalendarRange, Mails } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {  AssetsIcon, ServicesIcon, CarIcon } from '../icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const routes = [
   {
      icon: <LayoutGridIcon size={20} color="#72767C" />,
      name: 'Dashboard',
      path: '/dashboard',
   },
   {
      icon: <AssetsIcon />,
      name: 'Assets',
      path: '/assets',
   },
   {
      icon: <CarIcon />,
      name: 'Booking',
      path: '/booking',
   },
   {
      icon: <ShoppingBag size={20} color="#72767C" />,
      name: 'Sell Cars',
      path: '/sell-cars',
   },
   {
      icon: <ShoppingCart size={20} color="#72767C" />,
      name: 'Buy Cars',
      path: '/buy-cars',
   },
   {
    icon: <ServicesIcon />,
    name: 'Services',
    path: '/services',
 },
 {
  icon: <CalendarRange size={20} color="#72767C" />,
  name: 'Calendar',
  path: '/calendar',
  },
  {
    icon: <Mails size={20} color="#72767C" />,
    name: 'Messages',
    path: '/messages',
  },
];
const Sidebar = () => {
   const [path, setPath] = useState('');
   const [showSidebar, setShowSidebar] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
      setPath(pathname);
      setShowSidebar(false);
   }, [pathname]);

   

   return (
      <div className="w-[220px] bg-white h-screen flex gap-y-1 flex-col justify-between py-6">
      <div className="flex w-full flex-col gap-5">
        <div className={"flex gap-3 items-center text-xl font-bold justify-center "}>
          <Image src={"/logo.png"} width={30} height={30} alt="Logo" />
          Motiv
        </div>
        <div className="flex gap-y-1 flex-col w-full text-gray-500 mt-4 text-xs font-[600]">
          {routes.map((route, index) => (
            <Link href={route.path} key={index} className="flex side-link duration-150 cursor-pointer items-center gap-x-3 pr-3">
              <span
                className={`${
                  path === route.path ? "" : ""
                } w-1 duration-300 h-7 rounded-r-lg`}
              ></span>
              <div
                className={`flex duration-300 items-center justify-start rounded-md w-full px-4 py-2.5 ${
                  path === route.path ? "bg-[#F3F5F8]" : ""
                }`}
              >
                {route.icon}
                <span className="ml-3 whitespace-nowrap text-sm">{route.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
   );
};

export default Sidebar;
