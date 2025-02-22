import Filters from "@/components/game/filters/Filters";
import GamesList from "@/components/GamesList";
import Header from "@/components/Header";


import { Suspense } from "react";

export default function Home({ searchParams }: { searchParams: Record<string, string> }) {
//  const params = await searchParams;
  //console.log('homeeeeeeeeeeee',JSON.stringify(searchParams))
  return (
    <>
     <Header searchParams={searchParams.query}/>  
    <main className="bg-black/20 px-2 overflow-x-hidden">
      <Filters />
      
      <Suspense key={JSON.stringify(searchParams)} fallback={<p>Loading...</p>}>
        <GamesList currentPage={1} searchParams={searchParams}/>
      </Suspense>
    </main>
    </>
  );
}

//export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
