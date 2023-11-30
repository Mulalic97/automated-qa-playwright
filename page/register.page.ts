import { Locator, Page } from '@playwright/test';
import {Constants} from "../utils/test";
import {generateRandomString} from "../helpers/helper";

export class RegisterPage{
    private readonly page: Page;
    private readonly constants;
    private readonly name: string;
    private readonly email: string;
    private readonly password: string;

    // Element Locators
    readonly nameInputField: Locator;
    readonly emailInputField: Locator;
    readonly signUpButton: Locator;
    readonly passwordInputField: Locator;
    readonly passwordConfirmationInputField: Locator;

    constructor(page: Page, constants: Constants) {
        this.page = page;
        this.constants = constants;
        const { name, email, password } = generateRandomString();
        this.name = name;
        this.email = email;
        this.password = password;

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
        await this.nameInputField.fill(this.name)
    }
    async inputEmail() {
        await this.emailInputField.fill(this.email);
    }

    async inputPassword() {
        await this.passwordInputField.fill(this.password);
    }

    async inputPasswordConfirm(){
        await this.passwordConfirmationInputField.fill(this.password)
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