import { useState } from "react";
import { Static } from "./utils/static";
import Layout from "./components/Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <p className="text-9xl">
        A brand and product designer working with clients globally
      </p>
      <p className="text-9xl">
        A brand and product designer working with clients globally
      </p>
      <p className="text-9xl">
        A brand and product designer working with clients globally
      </p>
    </Layout>
  );
}

export default App;
