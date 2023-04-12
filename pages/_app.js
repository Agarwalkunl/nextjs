import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <div>
      {" "}
      <Head>
        <title>asdfasdf</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
