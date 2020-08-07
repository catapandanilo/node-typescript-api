import { resolve } from 'path';
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

export default {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ['<rootDir>/__test__/jest-setup.ts'],
    testMatch: ['<rootDir>/__test__/**/*.test.ts'],
  },
};
