module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
  },
  setupFilesAfterEnv: ['./setupTests.ts']
};
