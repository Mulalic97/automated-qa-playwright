import { test as base } from '@playwright/test';
import { getEnvFile} from "./config";
import {TestConstants, TestContext, TestMetadata, TestAuth} from "./test-context";

const environment = (process.env.ENVIRONMENT ?? 'CI').toLowerCase();
const { envFile, envFileName } = getEnvFile(environment);

console.log(`Loaded '${envFileName}' for environment '${environment}'`);

const constants = {
    cubedWebClientURL: envFile.WEBCLIENT_URL,
};

const auth = {

    web: {
        username: envFile.USERNAME,
        password: envFile.PASSWORD,
    }
};

const metadata = {
    product: envFile.PRODUCT,
    environment: environment,
};

export const test = base.extend<TestContext<Constants, Auth, Metadata>>({
    constants: constants,
    auth: auth,
    metadata: metadata,
});

export type Constants = TestConstants<typeof constants>;
export type Auth = TestAuth<keyof typeof auth>;
export type Metadata = TestMetadata<keyof typeof metadata>;