A fibonacci inspered image carousel

Usage Example
```
        <FibonacciCarousel imageSources={[
            "./assets/1.png",
            "./assets/2.png",
            "./assets/3.png",
            "./assets/4.png",
        ]} cycleTimeMillies={2000}/>
```

Also exposes ```nextImage()``` and ```previousImage()``` through the imperative handle.

```
        const ref = useRef(null);

        <FibonacciCarousel imageSources={[
            "./assets/1.png",
            "./assets/2.png",
            "./assets/3.png",
            "./assets/4.png",
        ]} cycleTimeMillies={2000} ref={ref}/>

        ref.current?.nextImage() // <-- Changes the image;
```