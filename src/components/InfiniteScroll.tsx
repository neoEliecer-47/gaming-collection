"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import CollectionCard from "./card/CollectionCard";
import { collectionProps } from "@/types";
import LoadingCollectionSpinner from "./card/LoadingCollectionSpinner";
import { fetchCollections } from "@/actions";

interface infiniteScrollProps {
  initialData: collectionProps[];
  collectionTypeEndpoint: string;
  //renderItem: (item: T) => JSX.Element;
}

export default function InfiniteScroll({
  collectionTypeEndpoint,
  initialData,
}: infiniteScrollProps) {
  const [data, setdata] = useState(initialData);
  const [page, setPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState(false)

  //console.log(hasMore);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchMoreData = useCallback(async () => {
    setLoading(true)
    try {
      
      const collectionRes = await fetchCollections(page, collectionTypeEndpoint);//server action
      if(!collectionRes?.data){
        setLoading(false)
        console.log('hjereeeeee')
        return
      }
      //console.log("new data", newData);
      //if (newData instanceof Array) {
        setdata((prev) => [...prev, ...collectionRes?.data]); //we need the prev to now lose the old data, the previous loaded data
      //}
      setPage((prev) => prev + 1);
      setHasMore(collectionRes.data instanceof Array);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }, [collectionTypeEndpoint, page]);

  function renderItem(item: any) {
    return <CollectionCard collection={item} />;
  }

  useEffect(() => {
    if (hasMore) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) fetchMoreData();
        },
        { rootMargin: "200px" }
      );

      if (observerRef.current) observer.observe(observerRef.current);

      return () => observer.disconnect();
    }
  }, [hasMore, page, collectionTypeEndpoint]);

  return (
    <div className="w-full overflow-hidden">
      {data.length > 0 && data.map((item)=>(
        <CollectionCard collection={item}/>
      ))}
      {loading && (
        <div className="w-full flex items-center justify-center">
            <LoadingCollectionSpinner />
        </div>
      )}
      {hasMore && <div ref={observerRef} className="h-10 bg-transparent"></div>}
    </div>
  );
}
