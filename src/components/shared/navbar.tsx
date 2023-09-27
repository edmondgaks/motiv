'use client';
import { BellDot, BellIcon, SearchIcon, Settings } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {

   return (
      <div className="sticky w-full items-center flex p-3 shadow-sm justify-between">
        <div className="flex items-center px-3 py-1 w-[25%] rounded-md bg-[#F5F4F6] gap-x-2">
          <SearchIcon size={18} color="#7C7C8D" />
          <input
            type="text"
            placeholder="Search or type "
            className="text-xs bg-[#F5F4F6] border-0 border-l-2 border-[#EF9011] w-full outline-none rounded-md p-2"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <BellDot strokeWidth={2.5} size={24} color="#7C7C8D" />
          <Image
            src={`https://ui-avatars.com/api/?name=Edmond+Gakuba&bold=true`}
            className=" rounded-full"
            width={40}
            height={40}
            alt="Acc"
          />
        </div>
    </div>
   );
};

export default NavBar;
