const { pathsToModuleNameMapper } = require('ts-jest');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  moduleNameMapper: pathsToModuleNameMapper({
    "@hooks/*": ["hooks/*"],
    "@routes/*": ["routes/*"],
    "@services/*": ["services/*"],
    "@store/*": ["store/*"]
  }, { prefix: '<rootDir>/' }),
};
