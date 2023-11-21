import { calculateIndex } from "../utils"
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