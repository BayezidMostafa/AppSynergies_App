import Footer from "@/Shared/Footer";
import NavBar from "@/Shared/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
