export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@tests(.*)$': '<rootDir>/src/tests$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
  },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
