import { Locator, Page } from '@playwright/test';
import {Constants} from "../utils/test";

export class RegisterPage{
    private readonly page: Page;
    private readonly constants;

    // Element Locators
    readonly nameInputField: Locator;
    readonly emailInputField: Locator;
    readonly signUpButton: Locator;
    readonly passwordInputField: Locator;
    readonly passwordConfirmationInputField: Locator;

    constructor(page: Page, constants: Constants) {
        this.page = page;
        this.constants = constants;

        this.nameInputField = page.locator('#user_name');
        this.emailInputField = page.locator('#user_email');
        this.passwordInputField = page.locator('#user_password');
        this.passwordConfirmationInputField = page.locator('#user_password_confirmation');
        this.signUpButton = page.getByRole('button', {name: 'Sign Up'});
    }

    async goto() {
        await this.page.goto(`${this.constants.webClientURL}/users/sign_up`);
    }

    async inputName(){
        await this.nameInputField.fill("Name")
    }
    async inputEmail() {
        await this.emailInputField.fill("random username");
    }

    async inputPassword() {
        await this.passwordInputField.fill("generatedpassword");
    }

    async inputPasswordConfirm(){
        await this.passwordConfirmationInputField.fill("generatedpassword")
    }

    async clickSignUp(){
        await this.signUpButton.click()
    }

    async register(){
        await this.goto();
        await this.inputName();
        await this.inputEmail();
        await this.inputPassword();
        await this.inputPasswordConfirm();
        await this.clickSignUp();
    }
}