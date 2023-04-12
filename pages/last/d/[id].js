import React, { useState } from "react";
async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}
async function getStaticProps(context) {
  console.log(context.params.id);
  let tt = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  tt = await tt.json();
  // tt = Array.from(tt);
  // console.log()

  return {
    props: {
      data: [tt],
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
export { getStaticProps, getStaticPaths };
