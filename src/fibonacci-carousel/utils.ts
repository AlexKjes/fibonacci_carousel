

export function calculateIndex(currentIndex: number, offset: number, collectionSize: number) {
    let newIndex = (currentIndex + offset) % collectionSize;
    return (newIndex < 0) ? collectionSize + newIndex : newIndex;
}