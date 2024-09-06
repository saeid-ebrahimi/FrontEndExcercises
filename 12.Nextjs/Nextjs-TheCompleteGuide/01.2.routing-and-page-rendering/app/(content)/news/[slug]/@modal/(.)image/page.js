"use client"
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params })
{
    const newsItemSlug = params.slug;
    const router = useRouter()
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug)
    if (!newsItem)
    {
        notFound();
    }
    
    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
            
        </>
        
    )
}