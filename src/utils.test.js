import { fetchNumbers, isNumber, isWhiteSpaceCharacter } from "./utils"

describe("testing utility functions", () => {
    describe("checking for number type validity", () => {
        test("when value other then number is passed", () => {
            expect(isNumber('/')).toBeFalsy();
        })

        test("when value of number type is passed", () => {
            expect(isNumber('1')).toBeTruthy();
        })
    })

    describe("check for whitespace characters", () => {
        test("when character other than whitespace is passed", () => {
            expect(isWhiteSpaceCharacter('a')).toBeFalsy();
        })

        test("when whitespace is passed", () => {
            expect(isWhiteSpaceCharacter(' ')).toBeTruthy();
        })
    })

    describe("fetch numbers from string input", () => {
        test("return empty array when string is empty", () => {
            expect(fetchNumbers('')).toHaveLength(0);
        })

        test("return empty array when no numbers are present in the string", () => {
            expect(fetchNumbers('\n;//,')).toHaveLength(0);
        })

        test("return an array containing numbers when numbers are present in the string", () => {
            expect(fetchNumbers('\n1;//2,3')).toHaveLength(3);
        })
    })

    describe("testing add functionality", () => {
        test("returning 0 when empty string is passed", () => {

        })

        test("returning 0 when no number present for addition in the string", () => {

        })

        test("throwing exceptipn when negative numbers present", () => {

        })

        test("returning sum of positive numbers", () => {
            
        })
    })
})