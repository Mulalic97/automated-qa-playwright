import {RegisterPage} from "../page/register.page";
import {test} from "../utils/test";
import {expect} from "@playwright/test";

test.describe('Register', () => {
    test('User successfully Registered', async ({ page, constants }) => {
        const registerPage = new RegisterPage(page, constants);

        await registerPage.register();
        const successElement = page.locator('#flash_notice');
        await expect(successElement).toBeVisible();
        await expect(successElement).toContainText('Welcome! You have signed up successfully.')

    });
});