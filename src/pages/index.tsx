import Head from 'next/head';
import HomeScreen from '@screens/HomeScreen';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta name='description' content='Mercado libre marketplace' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HomeScreen></HomeScreen>
      </main>
    </>
  );
}
