import React, { Suspense, useState } from "react";
import { lazyLoad } from "../lazyLoad";

const Sample = lazyLoad("/src/pages/Sample");

function HomePage() {
  const [state, setState] = useState(false);
  return (
    <div>
      home.page{" "}
      <button onClick={() => setState(!state)}>Click to import</button>
      <Suspense fallback="Loadingggg">{state ? <Sample /> : null}</Suspense>
    </div>
  );
}

export default HomePage;
