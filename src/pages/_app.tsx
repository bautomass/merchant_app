import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import "@/styles/main.scss";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
