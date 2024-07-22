import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Silkscreen as FontSilkscreen} from "next/font/google"
import localFont from 'next/font/local'

const Silkscreen = FontSilkscreen({
  subsets: ["latin"],
  weight:"400",
})

const twitterChirp = localFont({ src: '../font/twitterchirp.ttf' })

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={Silkscreen.className}>
      <Component {...pageProps} />
    </div>
  );
}
