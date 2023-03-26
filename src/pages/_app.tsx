import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SearchBar from '../components/SearchBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchBar></SearchBar>
      <Component {...pageProps} />
    </>
  );
}
