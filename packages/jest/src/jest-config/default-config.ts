import { globals } from 'jest-preset-angular/jest-preset.js';

// eslint-disable-next-line no-undef
globalThis.ngJest = {
  skipNgcc: false,
  tsconfig: 'tsconfig.spec.json',
};

export default {
  globals,
  preset: 'jest-preset-angular',
  testEnvironmentOptions: {
    url: 'https://github.com/just-jeb/angular-builders',
  },
  setupFilesAfterEnv: [`${__dirname}/setup.js`],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
  },
  globalSetup: 'jest-preset-angular/global-setup',
};
