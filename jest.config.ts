export default {
    moduleFileExtensions: ["ts", "tsx","js"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testMatch: [
        "**/src/**/*.test.ts",
    ],
    testEnvironment: "node",
};