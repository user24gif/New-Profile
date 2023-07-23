import React from "react";
import { Static } from "../../utils/static";
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default Layout;
