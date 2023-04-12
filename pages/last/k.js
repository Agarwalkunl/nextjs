import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";

function k() {
  let [l, ll] = useState();
  useEffect(() => {
    dd();
  }, []);
  async function dd() {
    let tt = await fetch("https://jsonplaceholder.typicode.com/posts");
    tt = await tt.json();
    ll(tt);
  }

  return (
    <div>
      {l &&
        l.map((d) => {
          return <h1>{d.title}</h1>;
        })}
    </div>
  );
}

export default k;
