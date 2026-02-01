import { useEffect, useState } from "react";
import "./Carousel.css"
import Link from "next/link";
import { Book } from "@/lib/apiTypes";
export default function Carousel({randomized_data} : {randomized_data : Book[]}) { 
    const [currentIndex , setCurrentIndex] = useState(0);
    const prevElem = () => {
        
        if(currentIndex == 2) setCurrentIndex(() => -2) 
        else if(currentIndex !== 2) setCurrentIndex((PreviousIndex) => PreviousIndex + 1)
    }
    const nextElem = () => {
        
        if(currentIndex !== -2) setCurrentIndex((PreviousIndex) => PreviousIndex - 1)
        else if(currentIndex == -2) setCurrentIndex((PreviousIndex) => 2)
    }
    useEffect(() => {
       let carouselInterval : NodeJS.Timeout = setInterval(()=>  nextElem(), 6000)
        return () => clearInterval(carouselInterval)
    },[])
    useEffect(() => {
        if(currentIndex == -2) setTimeout(() =>{if(currentIndex == -2) setCurrentIndex(2)} , 6000)
 
    } , [currentIndex])
    return (
        <section className="carousel-section">
            <button className="previous-button" onClick={() => prevElem()}>Previous</button>
            <div className="carousel-container">
                   
                    <div className="carousel-items" style={{width: ""}}>
                                <div className="carousel-item" id={`index${e.id}`} key={e.id}>
                                    <h1 >{e.title}</h1>
                                    <img src={e.image_url} alt={`${e.title} image`} />
                                    <Link href={`products/${e.id}`}>See more</Link>
                                </div>
                    </div> 
                    
            </div>
            <button className="next-button" onClick={() => nextElem()}>Next</button>
        </section>
    )
}