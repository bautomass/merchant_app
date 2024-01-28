import GameScreen from "@/components/GameScreen";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Merhant App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <GameScreen turn={50} icon="./icons/coin.svg"></GameScreen>
      </main>
    </>
  );
}
