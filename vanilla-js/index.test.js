const { helloWorld } = require("./index");

describe("WHEN helloWorld is run", () => {
    const result = helloWorld();

    test('THEN result is "Hello, World!"', () => {
        expect(result).toBe("Hello, World!");
    })
})