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
      <div className="sticky top-0 z-10 flex items-center justify-center lg:py-30">
        {/* <div className="flex rounded-100 bg-studio-white p-1 backdrop-blur-lg">
          {Static.navItems.map((navItem: any) => (
            <Link
              to={`${navItem.path}`}
              key={navItem}
              className="rounded-100 bg-white px-7 py-10px font-sans text-sm font-light"
            >
              {navItem.name}
            </Link>
          ))}
        </div> */}
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
