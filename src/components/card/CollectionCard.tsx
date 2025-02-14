import { collectionProps } from "@/types"




const CollectionCard = ({ collection }: {collection: collectionProps}) => {
  return (
    <div className="p-16">{collection.name}</div>
  )
}

export default CollectionCard