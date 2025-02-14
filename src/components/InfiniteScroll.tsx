'use client'

import { useEffect, useRef, useState } from "react";
import CollectionCard from "./card/CollectionCard";
import { collectionProps } from "@/types";

interface infiniteScrollProps<T> {
    initialData: T[];
    collectionTypeEndpoint: string;
    //renderItem: (item: T) => JSX.Element;
}


export default function InfiniteScroll<T>({ collectionTypeEndpoint, initialData }:infiniteScrollProps<T>){
    const [data, setdata] = useState(initialData)
    const [page, setPage] = useState<number>(2)
    const [hasMore, setHasMore] = useState<boolean>(true)

    const observerRef = useRef<HTMLDivElement | null>(null)

    async function fetchMoreData(){
        try {
            const res = await fetch(`/api/collections?collectionType=${collectionTypeEndpoint}&page=${page}`)
        const newData = await res.json()
        console.log('new data', newData)
        setdata((prev)=>[...prev, ...newData])//we need the prev to now lose the old data, the previous loaded data
        setPage((prev)=> prev + 1)
        setHasMore(newData.results.length > 0)
        } catch (error) {
            console.log(error)
        }
    }

    function renderItem(item){
        return <CollectionCard collection={item}/>
    }


    useEffect(()=> {
        //if(!hasMore) return

        const observer = new IntersectionObserver((entries)=> {
            if(entries[0].isIntersecting) fetchMoreData()
        }, { rootMargin: '20px' })


        if(observerRef.current) observer.observe(observerRef.current)

        return () => observer.disconnect();

    }, [hasMore])

    return (
        <div className="space-y-4">
            {data.length > 0 && data.map(renderItem)}
            {hasMore && <div ref={observerRef} className="h-10 bg-transparent"></div>}
        </div>
    )
}