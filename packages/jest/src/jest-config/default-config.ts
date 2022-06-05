import * as config from 'jest-preset-angular/jest-preset.js';

// eslint-disable-next-line no-undef
globalThis.ngJest = {
  skipNgcc: false,
};

console.log(JSON.stringify(config, null, 2));

export default {
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  preset: 'jest-preset-angular',
  testEnvironmentOptions: {
    url: 'https://github.com/just-jeb/angular-builders',
  },
  setupFilesAfterEnv: [`${__dirname}/setup.js`],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
  },
  globalSetup: 'jest-preset-angular/global-setup',
  snapshotSerializers: config.snapshotSerializers,
};
