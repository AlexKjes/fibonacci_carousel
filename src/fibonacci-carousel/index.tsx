import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { calculateIndex, shiftArray } from "./utils";
import "./style.css";

export type FibonacciCarouselProps = {
    imageSources: string[]
    cycleTimeMillies?: number
}

export interface FibonacciCarouselImperativeHandle {
    nextImage: () => void, previousImage: () => void
}

 interface FibonacciCarouselState {
    centerIndex: number,
    displayedSources: string[],
    classIndexes: number[],
}

interface CarouselRef {
    ref: React.Ref<FibonacciCarouselImperativeHandle>
}

export const FibonacciCarousel = forwardRef(({imageSources, cycleTimeMillies=0}: FibonacciCarouselProps & CarouselRef, ref: React.Ref<FibonacciCarouselImperativeHandle>) => {

    let [ state, setState] = useState({
        centerIndex: 0,
        displayedSources: Array(9).fill(0).map((_, i) => imageSources[calculateIndex(0, i-4, imageSources.length)]),
        classIndexes: Array(9).fill(0).map((_, i) => i)
    });
    const intervalRef = useRef<any | null>(null)

    const interval = useRef();

    useImperativeHandle(ref, () => ({
            nextImage() {shiftRight()},
            previousImage() {shiftLeft()}
        })
    )

    const classes = [
        "n-0-left img-cell",
        "n-1-left img-cell",
        "n-2-left img-cell",
        "n-3-left img-cell",
        "n-4 img-cell",
        "n-3-right img-cell",
        "n-2-right img-cell",
        "n-1-right img-cell",
        "n-0-right img-cell"
    ]

    function shiftLeft() {
        setState(oldState =>{
        let newClassIndexes = shiftArray(oldState.classIndexes, 1)
        let newDisplaySources = oldState.displayedSources.slice(0);
        newDisplaySources[newClassIndexes.indexOf(8)] = imageSources[calculateIndex(oldState.centerIndex, -5, imageSources.length)];

        return {
            centerIndex: calculateIndex(oldState.centerIndex, -1, imageSources.length),
            displayedSources: newDisplaySources,
            classIndexes: newClassIndexes
        }
    })
}
    
    function shiftRight() {
        setState(oldState => {
            let newClassIndexes = shiftArray(oldState.classIndexes, -1)
            let newDisplaySources = oldState.displayedSources.slice(0);
            newDisplaySources[newClassIndexes.indexOf(0)] = imageSources[calculateIndex(oldState.centerIndex, -5, imageSources.length)];

            return {centerIndex: calculateIndex(oldState.centerIndex, 1, imageSources.length),
            displayedSources: newDisplaySources,
            classIndexes: newClassIndexes}
        });
    }

    useEffect(() => {
        if (cycleTimeMillies > 0) {
            intervalRef.current =  setInterval(shiftRight, cycleTimeMillies);
            return () => {clearInterval(intervalRef.current)}
        }
    }, [cycleTimeMillies])

    return (
        <>
        <div className="galleryContainer" >
            {state.displayedSources.map((imgSrc, i) => <img 
                className={classes[state.classIndexes[i]]} 
                src={imgSrc}
                onClick={() => {
                    clearInterval(intervalRef.current)
                    let direction = state.classIndexes[i]-4;
                    let directionAbs = Math.abs(direction)
                    direction < 0 ? Array(directionAbs).fill(0).forEach((_, i) => shiftRight()) : Array(directionAbs).fill(0).forEach((_, i) => shiftLeft())
                }}
                />)}
        </div>
        </>
    )

    
})

