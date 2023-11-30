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

    async inputName(name:string){
        await this.nameInputField.fill(name)
    }
    async inputEmail(email:string) {
        await this.emailInputField.fill(email);
    }

    async inputPassword(password:string) {
        await this.passwordInputField.fill(password);
    }

    async inputPasswordConfirm(password:string){
        await this.passwordConfirmationInputField.fill(password)
    }

    async clickSignUp(){
        await this.signUpButton.click()
    }

    async register(name:string, email: string, password:string){
        await this.goto();
        await this.inputName(name);
        await this.inputEmail(email);
        await this.inputPassword(password);
        await this.inputPasswordConfirm(password);
        await this.clickSignUp();
    }
}