import GamesList from "@/components/GamesList";
import Header from "@/components/Header";
import { searchParamsProps } from "@/types";

import { Suspense } from "react";

export default async function Home({ searchParams }: searchParamsProps) {
 const params = await searchParams;
  console.log('homeeeeeeeeeeee',params)
  return (
    <>
   <Header searchParams={(await searchParams).query}/>
    <main className="bg-black/20 px-2 overflow-x-hidden">
      
      <Suspense fallback={<p>Loading...</p>}>
        <GamesList currentPage={1} />
      </Suspense>
    </main>
    </>
  );
}

export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
