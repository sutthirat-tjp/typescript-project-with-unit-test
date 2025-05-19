import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment : 'node',
    testMatch: ['**/test/**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'js'],
    moduleDirectories: ['node_modules', 'src'],
}

export default config;