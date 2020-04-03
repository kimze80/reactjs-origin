module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.(css|less|scss)$": "./styleMock.js"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(svg|jpg|png|css|scss)$': '<rootDir>./styleMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>spec/setup.js'],
  moduleDirectories: ['node_modules', 'src']
};
