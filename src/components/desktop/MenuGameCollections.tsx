import { selectedPlatformsMenu } from "@/constants"
import GameCollectionMenu from "./GameCollectionMenu"


const MenuGameCollections = () => {
  return (
    <div className="p-0 m-0">
        <GameCollectionMenu collectionName="platforms" data={selectedPlatformsMenu}/>
    </div>
  )
}

export default MenuGameCollections