module.exports = {
    testEnvironment: 'node',
    // Other configuration options are added here
    roots: ['<rootDir>/src/unit_tests'],
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    collectCoverage: true,
    coverageDirectory: 'coverage'
  };