module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns : ["node_modules/(?!axios)/"],
    // moduleNameMapper: {
    //   "axios": "axios/dist/node/axios.cjs"
    // }

  };
  