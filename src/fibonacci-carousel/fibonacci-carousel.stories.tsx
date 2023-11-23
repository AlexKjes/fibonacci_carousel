import React, { useRef } from "react";
import { FibonacciCarousel, FibonacciCarouselImperativeHandle } from "./index";
import imgUrl1 from "./assets/1.webp";
import imgUrl2 from "./assets/2.webp";
import imgUrl3 from "./assets/3.webp";
import imgUrl4 from "./assets/4.webp";
import imgUrl5 from "./assets/5.jpg";
import imgUrl6 from "./assets/6.jpg";
import imgUrl7 from "./assets/7.webp";
import imgUrl8 from "./assets/8.jpg";
import imgUrl9 from "./assets/9.webp";

export default {
    title: "Gallery"
}

const imageSources = [
    imgUrl1,
    imgUrl2,
    imgUrl3,
    imgUrl4,
    imgUrl5,
    imgUrl6,
    imgUrl7,
    imgUrl8,
    imgUrl9,
];

export const GalleryTest = () => {

    const ref = useRef<FibonacciCarouselImperativeHandle>()

    return (
        <>
        <FibonacciCarousel imageSources={imageSources} cycleTimeMillies={2000} ref={ref}/>
        <button onClick={() => ref.current?.previousImage()}>prev</button>
        <button onClick={() => ref.current?.nextImage()}>next</button>
        </>)

}


