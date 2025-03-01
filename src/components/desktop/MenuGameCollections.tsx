import { mainCollectionsFilters, selectedGenresMenu, selectedPlatformsMenu } from "@/constants"
import GameCollectionMenu from "./GameCollectionMenu"


const MenuGameCollections = () => {
  return (
    <div className="p-0 m-0">
        <GameCollectionMenu collectionName="platforms" data={selectedPlatformsMenu}/>
        <GameCollectionMenu collectionName="genres" data={selectedGenresMenu}/>
        <GameCollectionMenu collectionName='collections' data={mainCollectionsFilters} viewAllCollections={false}/>
    </div>
  )
}

export default MenuGameCollections