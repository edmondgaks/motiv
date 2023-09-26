'use client';
import { BellIcon, SearchIcon, Settings } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {

   return (
      <div className="sticky w-full items-center flex p-5 shadow-sm justify-between">
      <h1>Menu</h1>
      <div className="flex text-black/70 items-center gap-x-16">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <SearchIcon size={15} />
            <input
              type="text"
              placeholder="Search"
              className="border text-xs border-none outline-none rounded-md p-1.5"
            />
          </div>
          <button>
            <BellIcon size={20} />
          </button>
          <Settings size={20} />
        </div>
        <div className="flex items-center gap-x-4">
          <h2 className=" text-sm font-semibold">Manzi Maxwell</h2>
          <Image
            src={`https://ui-avatars.com/api/?name=Manzi+Maxwell&bold=true`}
            className=" rounded-full"
            width={30}
            height={30}
            alt="Acc"
          />
        </div>
      </div>
    </div>
   );
};

export default NavBar;
