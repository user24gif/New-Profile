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
      <div className="flex justify-center items-center lg:py-30 sticky top-0 z-10">
        <div className="bg-studio-white rounded-100 backdrop-blur-lg flex p-1">
          {Static.navItems.map((navItem: any) => (
            <Link
              to={`${navItem.path}`}
              key={navItem}
              className="bg-white text-sm font-sans font-light rounded-100 py-10px px-7"
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
      {children}
      <div className=" bg-studio-white text-black backdrop-blur-lg p-1 w-max rounded-3xl flex flex-row gap-1 items-center justify-center sticky z-10 bottom-5 mx-auto px-3 py-2">
        <span>
          <img className="w-5 h-5" src={Asterik} alt="logo" />
        </span>
        <p>Shop</p>
      </div>
    </div>
  );
}

export default Layout;
