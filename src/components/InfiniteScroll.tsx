"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import CollectionCard from "./card/CollectionCard";
import { collectionProps } from "@/types";
import LoadingCollectionSpinner from "./card/LoadingCollectionSpinner";

interface infiniteScrollProps<T> {
  initialData: collectionProps[];
  collectionTypeEndpoint: string;
  //renderItem: (item: T) => JSX.Element;
}

export default function InfiniteScroll<T>({
  collectionTypeEndpoint,
  initialData,
}: infiniteScrollProps<T>) {
  const [data, setdata] = useState(initialData);
  const [page, setPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState(false)

  //console.log(hasMore);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchMoreData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        `/api/collections?collectionType=${collectionTypeEndpoint}&page=${page}`,
        {
          cache: "no-store",
        }
      );
      const newData = await res.json();
      console.log("new data", newData);
      if (newData instanceof Array) {
        setdata((prev) => [...prev, ...newData]); //we need the prev to now lose the old data, the previous loaded data
      }
      setPage((prev) => prev + 1);
      setHasMore(newData instanceof Array);
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
