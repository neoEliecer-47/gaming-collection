import CollectionCard from "@/components/card/CollectionCard";
import Header from "@/components/Header";
import InfiniteScroll from "@/components/InfiniteScroll";
import { fetchGamesCollection } from "@/helpers";
import { collectionProps, collectionType } from "@/types";
import { notFound } from "next/navigation";

//const NO_PAGES_COLLECTIONS = ['genres', 'stores']

const page = async ({ params }: { params: { collectionType: collectionType }}) => {
  const gamesCollectionInitialData = await fetchGamesCollection(params.collectionType);
  if(!gamesCollectionInitialData){
    notFound()
  }
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold w-full flex justify-center items-center text-lg capitalize p-2">
        {params.collectionType}
      </h1>
      {params.collectionType === 'genres' || params.collectionType ==='stores' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
          {gamesCollectionInitialData.results.map((item: collectionProps, index: number ) => (
            <CollectionCard collectionData={item} collectionType={params.collectionType} index={index}/>
          ))}
        </div>
      ): (
        <InfiniteScroll
         collectionTypeEndpoint={params.collectionType}
         initialData={gamesCollectionInitialData.results}
        />
      )}
    </div>
    </>
  );
};

export default page;
