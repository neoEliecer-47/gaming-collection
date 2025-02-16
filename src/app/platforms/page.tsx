import InfiniteScroll from "@/components/InfiniteScroll";
import { fetchGamesCollection } from "@/helpers";


const page = async() => {
      const platformsInitialData = await fetchGamesCollection("platforms");
    
      return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-lg">platfoms</h1>
          <InfiniteScroll
            collectionTypeEndpoint="platforms"
            initialData={platformsInitialData.results}
           
          />
        </div>
      );
}

export default page