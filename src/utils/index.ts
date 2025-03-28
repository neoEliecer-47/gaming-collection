import { mainPlatformsFilters } from "@/constants";
import { fetchPlatforms } from "@/helpers";

export function buildDate(date: string) {
  const months = [
    { numMonth: "01", month: "JAN" },
    { numMonth: "02", month: "FEB" },
    { numMonth: "03", month: "MAR" },
    { numMonth: "04", month: "APR" },
    { numMonth: "05", month: "MAY" },
    { numMonth: "06", month: "JUN" },
    { numMonth: "07", month: "JUL" },
    { numMonth: "08", month: "AUG" },
    { numMonth: "09", month: "SEP" },
    { numMonth: "10", month: "OCT" },
    { numMonth: "11", month: "NOV" },
    { numMonth: "12", month: "DEC" },
  ];
  const arrDateStr = date.split("-");
  const monthStr = months.find((d) => d.numMonth === arrDateStr[1])?.month;
  const newStrDate = monthStr + " " + arrDateStr[2] + ", " + arrDateStr[0];
  return newStrDate;
}


export async function buildGamesCurrentTitle(searchParams: Record<string, string>) {
  //console.log(first)
  if(searchParams.developers) return `Games by ${searchParams.developers}`
  if (searchParams.platforms) {
    try {
      const data  = await fetchPlatforms(searchParams.platforms)
      console.log('platformssss', data)
      return `Games for ${data.name}`
    } catch (error) {
      
    }
  }
  const platformId = Number(searchParams.platforms);

  const mainPlatform = mainPlatformsFilters.find(
    (platform) => platform.id.toString() === searchParams.platforms
  );
  if (mainPlatform) {
    return `Games for ${mainPlatform.name}`;
  }
  // if(searchParams.platforms && mainPlatformsFilters.includes()) {
  //   const platform = mainPlatformsFilters.find((platform) => (platform.id).toString() === searchParams.platforms)?.name
  //   return `${platform} Games`
  // }sub

  for (const platform of mainPlatformsFilters) {
    const subPlatform = platform.platforms?.find(
      (sub) => sub.id === platformId
    )?.name;
    //console.log(subPlatform);
    if (subPlatform) {
      return `Games for ${subPlatform}`;
    }
  }
  return "Games";
}

export function buildCollectionTitle(currentCollection: string) {
  //console.log('build collection title',new URLSearchParams(currentCollection))
  if(currentCollection === 'platforms') return;
  const collectionName = currentCollection
    ?.split("-")
    .join()
    .replace(/,/g, " ");

  return collectionName;
}
