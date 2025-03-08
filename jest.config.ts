import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  testEnvironment: "jsdom", // Ensures Jest runs in a browser-like environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file for mocks
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest", // Use ts-jest for transforming TypeScript files
  },
};

export default config;

