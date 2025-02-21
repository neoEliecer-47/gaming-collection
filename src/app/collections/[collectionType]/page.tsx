import CollectionCard from "@/components/card/CollectionCard";
import InfiniteScroll from "@/components/InfiniteScroll";
import { fetchGamesCollection } from "@/helpers";
import { collectionProps, collectionType } from "@/types";

//const NO_PAGES_COLLECTIONS = ['genres', 'stores']

const page = async ({ params }: { params: { collectionType: collectionType }}) => {
  const gamesCollectionInitialData = await fetchGamesCollection(params.collectionType);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold w-full flex justify-center items-center text-lg capitalize p-2">
        {params.collectionType}
      </h1>
      {params.collectionType === 'genres' || params.collectionType ==='stores' ? (
        <div className="flex flex-wrap justify-center gap-4">
          {gamesCollectionInitialData.results.map((item: collectionProps) => (
            <CollectionCard collection={item} />
          ))}
        </div>
      ): (
        <InfiniteScroll
         collectionTypeEndpoint={params.collectionType}
         initialData={gamesCollectionInitialData.results}
        />
      )}
    </div>
  );
};

export default page;
