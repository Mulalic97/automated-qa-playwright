import {RegisterPage} from "../page/register.page";
import {EditUserPage} from "../page/edit-user.page";
import {test} from "../utils/test";
import {expect} from "@playwright/test";
import {generateRandomString} from "../helpers/helper";
import {LoginPage} from "../page/login.page";

test.describe('Register', () => {
    test('User successfully Registered', async ({ page, constants }) => {
        const registerPage = new RegisterPage(page, constants);
        const editUserPage = new EditUserPage(page,constants);
        const loginPage = new LoginPage(page,constants);

        const { name, email, password } = generateRandomString();

// user inputs field and registers
        await registerPage.register(name,email,password);
        const successRegister = page.locator('#flash_notice');
        await expect(successRegister).toBeVisible();
        await expect(successRegister).toContainText('Welcome! You have signed up successfully.');

// verify user is valid
        const signOutButton = await page.$('a[href="/users/sign_out"]');
        await signOutButton.click();
        await loginPage.login(email,password);

// user cancels account
        await editUserPage.cancelMyAccount();
        const successAccountCancel = page.locator('#flash_notice')
        await expect(successAccountCancel).toContainText('Bye! Your account has been successfully cancelled. We hope to see you again soon.');
    });
});