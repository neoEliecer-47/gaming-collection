import { fetchPlatforms } from "@/helpers";
import GameReadMore from "./game/GameReadMore";

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

  return (
    <article>
      {data.description ? (
        <GameReadMore
          description={data.description}
          title={data.name}
          initialHeight={5}
          duration={300}
        />
      ) : (
        <h1>{data.name}</h1>
      )}
    </article>
  );
};

export default GameTitleInfo;
