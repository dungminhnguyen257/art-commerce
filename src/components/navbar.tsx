"use client"; // this is a client component
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import React, { useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: String;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Cart",
    page: "Cart",
  },
];

export const Navbar = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-20 sticky top-0 z-50 dark:border-b dark:border-stone-300 ">
      <div className="flex items-center justify-between py-3">
        <div className="md:py-5 md:block ">
          <h2 className="text-2xl font-bold">Artcomerce</h2>
          <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
