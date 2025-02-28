import MenuGameCollections from "@/components/desktop/MenuGameCollections";
import Filters from "@/components/game/filters/Filters";
import GamesList from "@/components/GamesList";
import GameTitleInfo from "@/components/GameTitleInfo";
import Header from "@/components/Header";

import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  //  const params = await searchParams;
  //console.log('homeeeeeeeeeeee',JSON.stringify(searchParams))
  return (
    <main className="bg-black/20 px-2 overflow-hidden">
      
      <section className="p-0 m-0 flex">
        <div className="min-w-[20rem] hidden md:block bg-black/80 max-h-[100vh] overflow-y-auto mt-16">
          <MenuGameCollections />
          <div className="h-[80rem] bg-green-700">menu2</div>
          <div className="h-[80rem] bg-red-400">menu3</div>
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
            <GamesList currentPage={1} searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

//export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
