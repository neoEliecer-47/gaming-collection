
import GamesList from "@/components/GamesList";

import { Suspense } from "react";

export default async function Home() {
  
 
  return (
    <main className='bg-black/15 px-2'>
        <Suspense fallback={<p>Loading...</p>} >
        <GamesList currentPage={1}/>
        </Suspense>
    </main>
  );
}

export const dynamic = "force-static"; //ensures that the page is statically generated at build time for the first time.
