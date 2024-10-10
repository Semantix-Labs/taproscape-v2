import "@/styles/globals.css";
import '../styles/bagea.css';
import type { AppProps } from "next/app";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />
  <WhatsAppChat />
</>
}
