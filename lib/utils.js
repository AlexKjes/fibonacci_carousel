"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftArray = exports.calculateIndex = void 0;
function calculateIndex(currentIndex, offset, collectionSize) {
    let newIndex = (currentIndex + offset) % collectionSize;
    return (newIndex < 0) ? collectionSize + newIndex : newIndex;
}
exports.calculateIndex = calculateIndex;
function shiftArray(array, offset) {
    return array.reduce((accumulator, current, i) => { accumulator[calculateIndex(i, offset, array.length)] = current; return accumulator; }, Array(array.length));
}
exports.shiftArray = shiftArray;
