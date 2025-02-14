'use client'

import { useEffect, useRef, useState } from "react";

interface infiniteScrollProps<T> {
    initialData: T[];
    apiEndpoint: string;
    renderItem: (item: T) => JSX.Element;
}


export default function InfiniteScroll<T>({ apiEndpoint, initialData, renderItem }:infiniteScrollProps<T>){
    const [data, setdata] = useState(initialData)
    const [page, setPage] = useState<number>(2)
    const [hasMore, setHasMore] = useState<boolean>(false)

    const observerRef = useRef<HTMLDivElement | null>(null)

    async function fetchMoreData(){
        const res = await fetch('endpoint here')
        const newData: T[] = await res.json()

        setdata((prev)=>[...prev, ...newData])
        setPage((prev)=> prev + 1)
        setHasMore(newData.length > 0)
    }


    useEffect(()=> {
        if(!hasMore) return

        const observer = new IntersectionObserver((entries)=> {
            if(entries[0].isIntersecting) fetchMoreData()
        }, { rootMargin: '100px' })


        if(observerRef.current) observer.observe(observerRef.current)

        return () => observer.disconnect();

    }, [hasMore])

    return (
        <div className="space-y-4">

        </div>
    )
}