'use client';
import { LayoutGridIcon, LogOutIcon, MenuSquareIcon, UserCircleIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { SideBarHideIcon, SideBarShowIcon, TReviewsIcon, TrackIcon } from '../icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const routes = [
   {
      icon: <LayoutGridIcon />,
      name: 'Dashboard',
      path: '/dashboard',
   },
   {
      icon: <MenuSquareIcon />,
      name: 'Menu',
      path: '/menu',
   },
   {
      icon: <TrackIcon />,
      name: 'Track Orders',
      path: '/track-orders',
   },
   {
      icon: <TReviewsIcon />,
      name: 'Tickets & reviews',
      path: '/tickets-and-reviews',
   },
   {
      icon: <UserCircleIcon />,
      name: 'Account',
      path: '/account',
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

      <div className="w-[220px] bg-white h-screen flex gap-y-3 flex-col justify-between py-6">
      <div className="flex w-full flex-col gap-5">
        <div className={"flex gap-3 items-center font-bold justify-center "}>
          <Image src={"/logo.svg"} width={40} height={40} alt="Logo" />
          Motiv
        </div>
        <div className="flex gap-y-0.5 flex-col w-full">
          {routes.map((route, index) => (
            <Link href={'#'} key={index} className="flex side-link duration-150 cursor-pointer items-center gap-x-3 pr-3">
              <span
                className={`${
                  path === route.path ? "bg-primary" : ""
                } w-1 duration-300 h-7 rounded-r-lg`}
              ></span>
              <div
                className={`flex duration-300 items-center justify-start rounded-md w-full px-4 py-2.5 ${
                  path === route.path ? "bg-primary text-white" : ""
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
