import GamesList from "@/components/GamesList";
import Header from "@/components/Header";

import { Suspense } from "react";

export default async function Home() {
  return (
    <>
   
    <main className="bg-black/20 px-2 overflow-x-hidden">
      
      <Suspense fallback={<p>Loading...</p>}>
        <GamesList currentPage={1} />
      </Suspense>
    </main>
    </>
  );
}

export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
