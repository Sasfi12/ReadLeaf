import { useEffect, useState } from "react";
import "./Carousel.css"
import Link from "next/link";
import { Book } from "@/lib/apiTypes";
export default function Carousel({randomized_data} : {randomized_data : Book[]}) { 
    const data = [randomized_data[0] , randomized_data[1] , randomized_data[2] , randomized_data[3] , randomized_data[4]]
    const [currentIndex , setCurrentIndex] = useState(0);
    const [e , setE] = useState(data[currentIndex])
        const prevElem = () => {

            if(currentIndex == 4) setCurrentIndex(() => 0) 
            else if(currentIndex !== 4) setCurrentIndex((PreviousIndex) => PreviousIndex + 1)
        }
        const nextElem = () => {

            if(currentIndex !== 0) setCurrentIndex((PreviousIndex) => PreviousIndex - 1)
            else if(currentIndex == 0) setCurrentIndex((PreviousIndex) => 4)
        }
        useEffect(() => {
           let carouselInterval : NodeJS.Timeout = setInterval(()=>  nextElem(), 6000)
            setE(data[currentIndex])
            return () => clearInterval(carouselInterval)
        },[])
        useEffect(() => {
            if(currentIndex == -2) setTimeout(() =>{if(currentIndex == -2) setCurrentIndex(2)} , 6000)
            
        } , [currentIndex])
        console.log(currentIndex)
        return (
            <section className="carousel-section">
                <button className="previous-button" onClick={() => prevElem()}>Previous</button>
                <div className="carousel-container">
                    <div className="carousel-items" style={{width: ""}} key={e.id}>
                        <div className="carousel-item hidden" id={`index${e.id}`} key={e.id}>
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