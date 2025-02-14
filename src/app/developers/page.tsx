import CollectionCard from "@/components/card/CollectionCard";
import InfiniteScroll from "@/components/InfiniteScroll";
import { fetchGamesCollection } from "@/helpers";
import { collectionProps } from "@/types";

const page = async () => {
  const gamesDevelopersInitialData = await fetchGamesCollection("developers");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-lg">Devs</h1>
      <InfiniteScroll
        collectionTypeEndpoint="developers"
        initialData={gamesDevelopersInitialData.results}
       
      />
    </div>
  );
};

export default page;
