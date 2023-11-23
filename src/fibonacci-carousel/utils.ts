

export function calculateIndex(currentIndex: number, offset: number, collectionSize: number) {
    let newIndex = (currentIndex + offset) % collectionSize;
    return (newIndex < 0) ? collectionSize + newIndex : newIndex;
}

export function shiftArray(array: any[], offset:number) {
    return array.reduce((accumulator, current, i) => {accumulator[calculateIndex(i, offset, array.length)] = current; return accumulator}, Array(array.length))
}