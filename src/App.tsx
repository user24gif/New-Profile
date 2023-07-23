import { Static } from "./utils/static";
import Layout from "./components/Layout/Layout";
import cx from "classnames";
import Arrow from "./assets/arrow-up-right.svg";
import Asterik from "./assets/asterik.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <div className="flex h-70vh flex-col items-center justify-center gap-10 py-10">
        <p className="max-w-3xl text-center text-7xl font-medium leading-86">
          A brand and product designer working with clients globally
        </p>
        <div className="flex gap-10px p-1">
          {Static.headerItems.map((navItem: any, idx: number) => (
            <p
              key={navItem}
              className={cx("px-3 py-2 font-sans text-sm font-light", {
                "rounded-100 bg-studio-white backdrop-blur-lg ": idx !== 0,
                "bg-transparent": idx == 0,
              })}
            >
              {navItem}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-1400px grid-cols-2 gap-5 px-10 py-10">
        {Static.cards.map((card: any) => (
          <Link
            to="/profile"
            key={card.name}
            // className={`${card.bg} lg:flex-shrink lg:max-w-650px  lg:w-full lg:h-496px rounded-xl bg-cover bg-center`}
            className={`${card.bg}  group relative h-496px rounded-xl bg-cover bg-center after:absolute after:left-0 after:top-0 after:h-496px after:w-full after:content-[''] hover:after:rounded-xl hover:after:backdrop-blur-sm hover:after:backdrop-brightness-50 hover:after:transition hover:after:duration-500 hover:after:ease-out`}
          >
            <p className="hidden group-hover:absolute group-hover:left-5 group-hover:top-6 group-hover:z-10 group-hover:block group-hover:font-light group-hover:text-white">
              {card.name}
            </p>
            <Link
              to="/profile"
              className="hidden group-hover:absolute group-hover:right-5 group-hover:top-5 group-hover:z-10 group-hover:block group-hover:rounded-full group-hover:bg-white group-hover:p-4 "
            >
              <img src={Arrow} alt="cta-icon" />
            </Link>
          </Link>
        ))}
      </div>
      <div className="py-40 text-center">
        <p className="text-4xl font-medium leading-44">Let's work together.</p>
        <p className="text-4xl font-medium text-oh-gray">Get in touch.</p>
      </div>
      <footer className="flex flex-row items-center justify-between px-10">
        <div className="flex items-center gap-1">
          <img src={Asterik} alt="cta-icon" className="h-4 w-4" />
          <p>Michael Harris {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-4">
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Mail</p>
        </div>
      </footer>
    </Layout>
  );
}

export default App;
