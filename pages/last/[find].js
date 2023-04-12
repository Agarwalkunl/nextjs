import React, { useState } from "react";
import { useRouter } from "next/router";

function find() {
  const [k, l] = useState();
  const { query } = useRouter();
  async function fun(e) {
    let re = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
      },
    });
    re = await re.json();
    l(re);
  }
  return (
    <div>
      <button onClick={() => fun(query.find)}>find</button>
      <h1>{k}</h1>
    </div>
  );
}

export default find;
