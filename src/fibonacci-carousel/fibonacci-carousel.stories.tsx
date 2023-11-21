import React from "react";
import { FibonacciCarousel } from "./index";

export default {
    title: "Gallery"
}

const imageSources = [
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7.jpg"
]

export const GalleryTest = () => <FibonacciCarousel imagesSources={imageSources}/>