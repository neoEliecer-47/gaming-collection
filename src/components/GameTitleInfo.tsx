import { fetchPlatforms } from "@/helpers";
import GameReadMore from "./game/GameReadMore";
import { genresData, storesData } from "@/constants";

type dataProps = {
  name: string;
  description: string;
};

const GameTitleInfo = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const data = await fetchPlatforms(searchParams.platforms);
  console.log(searchParams);
  function buildCollectionTitle() {
    const key = Object.keys(searchParams).find(
      (key) =>
        key === "stores" ||
        key === "platforms" ||
        key === "genres" ||
        key === "developers" ||
        key === "publishers" ||
        key === "tags"
    );

    if (!key) return "All the Games";

    switch (key) {
      case "stores":
        return `Games Available At ${
          storesData.filter(
            (store) => store.id === parseInt(searchParams.stores)
          )[0].name
        }`;
      case "platforms":
        return `Games For ${data.name}`;
      case "genres":
        return `${
          searchParams.platforms ? data.name : ""
        } ${searchParams.genres.replace(/-/g, " ")} Games`;
      case "developers":
        return `${
          searchParams.platforms ? data.name + " games" : ""
        } developed by ${searchParams.developers}`;
      case "publishers":
        return `${
          searchParams.platforms ? data.name + " games" : ""
        } published by ${searchParams.publishers}`;
      case "tags":
        return `${searchParams.platforms ? data.name : ""} ${
          searchParams.tags
        } Games`;
      default:
        return "Games";
    }
  }

  const titleStyles =
    "w-full text-2xl max-w-[15rem] text-center font-bold text-black flex items-center justify-center capitalize";



  function TitleGame() {
    return (
      <div className="w-full flex justify-center items-center p-0 m-0 mb-2">
        <h1 className={titleStyles}>{buildCollectionTitle()}</h1>
      </div>
    );
  }
  //stores -> games availabnle at (store)
  //platforms -> games for
  //genres -> Action Games / (platform) (genre) games
  //developers -> developed by / Unisoft (platform) games
  //publishers -> published by /(platform) games
  //tags -> singleplayer (platform) games
  return (
    <article className="mt-4 mb-6">
      {data.description || searchParams.genres ? ( //if there is a platform in searchParams, show the description
        <>
          <TitleGame />
          <GameReadMore
            description={
              searchParams.genres
                ? genresData.filter(
                    (genre) => genre.slug === searchParams.genres
                  )[0].description
                : data.description
            }
            title={data.name}
            initialHeight={5}
            duration={300}
          />
        </>
      ) : (
        <TitleGame />
      )}
    </article>
  );
};

export default GameTitleInfo;
