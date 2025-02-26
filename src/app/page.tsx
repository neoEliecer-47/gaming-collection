import Filters from "@/components/game/filters/Filters";
import GamesList from "@/components/GamesList";
import GameTitleInfo from "@/components/GameTitleInfo";
import Header from "@/components/Header";


import { Suspense } from "react";

export default function Home({ searchParams }: { searchParams: Record<string, string> }) {
//  const params = await searchParams;
  //console.log('homeeeeeeeeeeee',JSON.stringify(searchParams))
  return (
    
     
    <main className="bg-white/20 px-2 overflow-x-hidden">
      <Filters />
      <Suspense key={JSON.stringify(searchParams.platforms)} fallback={<p>Loading...</p>}>
        <GameTitleInfo searchParams={searchParams} />
      </Suspense>
      <Suspense key={JSON.stringify(searchParams)} fallback={<p>Loading...</p>}>
        <GamesList currentPage={1} searchParams={searchParams}/>
      </Suspense>
    </main>
  
  );
}

//export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
