import { calculateIndex, shiftArray } from "../utils"
import {describe, expect, test} from '@jest/globals';

describe("Calculate Index", () => {
    test("returns last index when index is offset -1 from 0", () => {
        let actual = calculateIndex(0, -1 , 10);
        expect(actual).toBe(9)
    })

    test("returns second index when index is offset 1 from 0", () => {
        let actual = calculateIndex(0, 1 , 10);
        expect(actual).toBe(1);
    })

    test("returns first index when index is offset 1 from last index", () => {
        let actual = calculateIndex(9, 1 , 10);
        expect(actual).toBe(0);
    })
})

describe("shiftArray", () => {
    test("verify all elements is shifted one position to the right with wraparound", () => {
        let actual = shiftArray(Array(10).fill(0).map((_, i) => i), 1)
        expect(actual[0]).toBe(9);
        expect(actual[9]).toBe(8);
    })

    test("verify all elements is shifted one position to the left with wraparound", () => {
        let actual = shiftArray(Array(10).fill(0).map((_, i) => i), -1)
        expect(actual[0]).toBe(1);
        expect(actual[9]).toBe(0);
    })
})