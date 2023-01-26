import { Roboto } from "@next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SharedLayout from "@/components/SharedLayout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SharedLayout>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </SharedLayout>
  );
}
