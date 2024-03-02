import React from "react";
import { Static } from "../../utils/static";
import { Link } from "react-router-dom";
import Asterik from "../../assets/asterik.png";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="sticky top-0 z-20 flex  items-center justify-between lg:py-1 bg-white">
        <div className="flex p-1 gap-2 rounded-md ">
          {Static.user.map((navItem: any) => (
            <Link
              to={`${navItem.path}`}
              key={navItem}
              className="rounded-md bg-white text-gray-900 px-5 py-10px font-serif text-lg font-medium "
            >
              {navItem.name}
            </Link>
          ))}
        </div>

       {/* Resume button */}
        <div className="flex p-1 gap-2 rounded-md pr-6 ">
        {Static.navItems.map((navItem: any) => (
            <Link
              to={`${navItem.path}`}
              key={navItem}
              className="rounded-md text-gray-600 hover:text-Accent-Green2 px-2 py-10px font-sans text-sm font-semibold"
            >
              {navItem.name}
            </Link>
          ))}
          
          {Static.Accentbutton.map((navItem: any) => (
            <Link
              to={`${navItem.path}`}
              key={navItem}
              className="rounded-md bg-gray-900 hover:bg-Accent-Green1 text-gray-100 px-2 py-10px font-sans text-sm font-medium tracking-wide"
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
      {children}
      {/* <div className=" sticky bottom-10 z-10 mx-auto flex w-max flex-row items-center justify-center gap-1 rounded-3xl bg-studio-white p-1 px-3 py-2 text-black backdrop-blur-lg">
        <span>
          <img className="h-5 w-5" src={Asterik} alt="logo" />
        </span>
        <p>Shop</p>
      </div> */}
    </div>
  );
}

export default Layout;
