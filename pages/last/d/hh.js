import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function hh() {
  const [f, s] = useState(Array.from({ length: 20 }));
  function n() {
    setTimeout(() => {
      s(f.concat(Array.from({ length: 20 })));
    }, 500);
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={f.length}
        next={n}
        hasMore={true}
        loader={<p>loadding</p>}
        endMessage={<p>khatam</p>}
      >
        {f &&
          f.map((ff, i) => {
            return <h1>hello+{i + 1}</h1>;
          })}
      </InfiniteScroll>
    </div>
  );
}

export default hh;
