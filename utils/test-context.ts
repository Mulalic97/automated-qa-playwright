import { Auth } from './auth';
import { Immutable } from './immutable';

// Unchanging values that can be re-used between tests
export type TestConstants<T> = Immutable<T>;

// Usernames and passwords for the various applications and pages
export type TestAuth<T extends string> = Immutable<Record<T, Auth>>;

// Metadata about the test itself such as environment, product, etc
export type TestMetadata<T extends string> = Immutable<Record<T, string>>;

export interface TestContext<
    C extends TestConstants<unknown>,
    A extends TestAuth<string>,
    M extends TestMetadata<string>,
    > {
    constants: C;
    auth: A;
    metadata: M;
}