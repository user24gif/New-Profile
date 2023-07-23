import { useState } from "react";
import { Static } from "./utils/static";
import Layout from "./components/Layout/Layout";
import cx from "classnames";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="flex items-center flex-col h-70vh justify-center gap-10 py-10">
        <p className="text-7xl max-w-3xl font-medium leading-86 text-center">
          A brand and product designer working with clients globally
        </p>
        <div className="flex p-1 gap-10px">
          {Static.headerItems.map((navItem: any, idx: number) => (
            <p
              key={navItem}
              className={cx("font-sans text-sm font-light py-2 px-3", {
                "bg-studio-white rounded-100 backdrop-blur-lg ": idx !== 0,
                "bg-transparent": idx == 0,
              })}
            >
              {navItem}
            </p>
          ))}
        </div>
      </div>
      <div className="px-10 py-10 max-w-1400px mx-auto grid grid-cols-2 gap-5">
        {Static.cards.map((card: any) => (
          <div
            key={card.name}
            // className={`${card.bg} lg:flex-shrink lg:max-w-650px  lg:w-full lg:h-496px rounded-xl bg-cover bg-center`}
            className={`${card.bg} lg:h-496px rounded-xl bg-cover bg-center`}
          >
            <p>{card.name}</p>
            <div>/</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App;
