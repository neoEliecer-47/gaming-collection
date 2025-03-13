const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["@swc/jest"],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust if needed
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

module.exports = createJestConfig(customJestConfig);

