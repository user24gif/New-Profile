import React from "react";
import { Static } from "../../utils/static";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="flex justify-center items-center lg:py-30 sticky top-0">
        <div className="bg-studio-white rounded-100 backdrop-blur-lg flex p-1">
          {Static.navItems.map((navItem: any) => (
            <Link
              to={`${navItem.path}`}
              key={navItem}
              className="bg-white text-xs font-sans font-light rounded-100 py-3 px-30"
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
