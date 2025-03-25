import React from 'react'
import { Suspense } from "react";
import Header from '../components/Header';
import MenuGameCollections from '../components/desktop/MenuGameCollections';
import GameTitleInfo from '../components/GameTitleInfo';
import Filters from '../components/game/filters/Filters';
import GamesList from '../components/GamesList';

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  //  const params = await searchParams;
  //console.log('homeeeeeeeeeeee',JSON.stringify(searchParams))
  return (
    <main className="bg-black/20 px-2">
      <Header />
      <section className="p-0 m-0 flex">
        <div className="min-w-[20rem] hidden md:block bg-black/50 h-screen overflow-y-auto mt-16">
          <MenuGameCollections />
          
        </div>

        <div className="p-0 pt-2 m-0 md:flex-1 md:overflow-y-auto">
          <Suspense
            key={JSON.stringify(searchParams.platforms)}
            fallback={<p>Loading...</p>}
          >
            <GameTitleInfo searchParams={searchParams} />
          </Suspense>
          <Filters />
          <Suspense
            key={JSON.stringify(searchParams)}
            fallback={<p>Loading...</p>}
          >
            <GamesList searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

//export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
