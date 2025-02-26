import Filters from "@/components/game/filters/Filters";
import GamesList from "@/components/GamesList";
import GameTitleInfo from "@/components/GameTitleInfo";
import Header from "@/components/Header";


import { Suspense } from "react";

export default function Home({ searchParams }: { searchParams: Record<string, string> }) {
//  const params = await searchParams;
  //console.log('homeeeeeeeeeeee',JSON.stringify(searchParams))
  return (
    
     
    <main className="bg-white/20 px-2 overflow-hidden">
      <Filters />
      <Suspense key={JSON.stringify(searchParams.platforms)} fallback={<p>Loading...</p>}>
        <GameTitleInfo searchParams={searchParams} />
      </Suspense>
      <section className="p-0 m-0 flex">
        <div className="min-w-[20rem] hidden md:block bg-green-400 max-h-[100vh] overflow-y-auto">
          <div className="h-[80rem] bg-red-400">menu1</div>
          <div className="h-[80rem] bg-green-500">menu2</div>
          <div className="h-[80rem] bg-red-400">menu3</div>
        </div>
        
      <div className="flex-1 overflow-y-auto">
      
      <Suspense key={JSON.stringify(searchParams)} fallback={<p>Loading...</p>}>
        <GamesList currentPage={1} searchParams={searchParams}/>
      </Suspense>
      </div>
      </section>
    </main>
  
  );
}

//export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
