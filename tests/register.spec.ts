import {RegisterPage} from "../page/register.page";
import {test} from "../utils/test";

test.describe('Login', () => {
    test('User successfully logs in', async ({ page, constants }) => {
        const registerPage = new RegisterPage(page, constants);

        await registerPage.register();
    });
});