import { Locator, Page } from '@playwright/test';
import {Constants} from "../utils/test";

export class LoginPage{
    private readonly page: Page;
    private readonly constants;

    //Element Locators
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signInButton: Locator;

    constructor(page: Page, constants: Constants) {
        this.page = page;
        this.constants = constants;

        this.emailInputField = page.locator('#user_email');
        this.passwordInputField = page.locator('#user_password');
        this.signInButton = page.getByRole('button', {name: 'Sign in'});

    }

    async goto() {
        await this.page.goto(`${this.constants.webClientURL}/users/sign_in`);
    }

    async inputEmail(email:string){
        await this.emailInputField.fill(email);
    }

    async inputPassword(password:string){
        await this.passwordInputField.fill(password);
    }


async login(email:string,password:string){

        await this.goto();
        await this.inputEmail(email);
        await this.inputPassword(password);
        await this.signInButton.click();

}



}