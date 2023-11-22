import React, { FC, useEffect, useState } from "react";
import { calculateIndex } from "./utils";
import "./style.css";

export type FibonacciCarouselProps = {
    imageSources: string[]
    cycleTimeMillies?: number
}

export const FibonacciCarousel: FC<FibonacciCarouselProps> = ({imageSources, cycleTimeMillies=0}: FibonacciCarouselProps ) => {


    let [centerIndex, setCenterIndex] = useState(0);

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

    useEffect(() => {
        if (cycleTimeMillies > 0) {
            setInterval(() => setCenterIndex(centerIndex--), cycleTimeMillies)
        }
    }, [])

    return (
        <>
        <div className="galleryContainer">
            {imageSources.map((imageSource, index) => <img className={getClassName(index)} src={imageSource} onClick={() => {
                const classIndex = getClassIndex(index);
                if (classIndex === -1) return;
                setCenterIndex(centerIndex+(classIndex-4));
            }}/>)}
        </div>
        <button onClick={() => setCenterIndex(centerIndex++) }>Tilbake</button>
        <button onClick={() => setCenterIndex(centerIndex--) }>Frem</button>
        </>
    )

    function getClassName(imageIndex: number): string {
        const classIndex = getClassIndex(imageIndex)
        if (classIndex === -1) return "no-show";
        return classes[classIndex];
    }

    function getClassIndex(imageIndex: number) {
        let validYolo = [
            calculateIndex(centerIndex, -4, imageSources.length),
            calculateIndex(centerIndex, -3, imageSources.length),
            calculateIndex(centerIndex, -2, imageSources.length),
            calculateIndex(centerIndex, -1, imageSources.length),
            calculateIndex(centerIndex, 0, imageSources.length),
            calculateIndex(centerIndex, 1, imageSources.length),
            calculateIndex(centerIndex, 2, imageSources.length),
            calculateIndex(centerIndex, 3, imageSources.length),
            calculateIndex(centerIndex, 4, imageSources.length)
        ]
        return validYolo.indexOf(imageIndex)
    }
    
    
}

