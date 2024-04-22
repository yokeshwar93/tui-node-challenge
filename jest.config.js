/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
  },
  rootDir: "src",
  moduleNameMapper: {
      "^src/(.*)$": "<rootDir>/$1"
  },
  modulePathIgnorePatterns: ["<rootDir>/__tests__/__mocks__"]
};
