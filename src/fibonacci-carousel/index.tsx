import React, { FC } from "react";
import { calculateIndex } from "./utils";
import "./style.css";

export type FibonacciCarouselProps = {
    imagesSources: string[]
}

export const FibonacciCarousel: FC<FibonacciCarouselProps> = ({imagesSources}: FibonacciCarouselProps ) => {

    let index = 0;

    return (
        <div className="galleryContainer">
            <img className={"n-1-left"} src={imagesSources[calculateIndex(index, -3, imagesSources.length)]}/>
            <img className={"n-2-left"} src={imagesSources[calculateIndex(index, -2, imagesSources.length)]}/>
            <img className={"n-3-left"} src={imagesSources[calculateIndex(index, -1, imagesSources.length)]}/>
            <img className={"n-4"} src={imagesSources[calculateIndex(index, 0, imagesSources.length)]}/>
            <img className={"n-2-right"} src={imagesSources[calculateIndex(index, 2, imagesSources.length)]}/>
            <img className={"n-1-right"} src={imagesSources[calculateIndex(index, 3, imagesSources.length)]}/>
            <img className={"n-3-right"} src={imagesSources[calculateIndex(index, 1, imagesSources.length)]}/>
        </div>
    )
}

