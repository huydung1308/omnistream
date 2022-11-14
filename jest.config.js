/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  moduleNameMapper: {
    "@Utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
