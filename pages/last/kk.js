import React, { useState } from "react";
async function getServerSideProps() {
  let tt = await fetch("https://jsonplaceholder.typicode.com/posts");
  tt = await tt.json();

  return {
    props: {
      data: tt,
    },
  };
}
function kk(props) {
  return (
    <div>
      {" "}
      {props.data &&
        props.data.map((d) => {
          return <h1>{d.title}</h1>;
        })}
    </div>
  );
}

export default kk;
export { getServerSideProps };
