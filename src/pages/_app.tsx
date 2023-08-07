import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("My app is running");

  
  return <Component {...pageProps} />;
}

export default MyApp;
