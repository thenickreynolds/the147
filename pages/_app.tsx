import { AppProps } from "next/dist/next-server/lib/router/router";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
