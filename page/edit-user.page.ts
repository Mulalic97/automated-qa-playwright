import { Locator, Page } from '@playwright/test'
import { Constants } from '../utils/test'

export class EditUserPage {
  private readonly page: Page
  private readonly constants

  // Element Locators
  private readonly cancelMyAccountButton: Locator

  constructor(page: Page, constants: Constants) {
    this.page = page
    this.constants = constants

    this.cancelMyAccountButton = page.getByRole('button', {
      name: 'Cancel my account',
    })
  }

  async goto() {
    await this.page.goto(`${this.constants.webClientURL}/users/edit`)
  }

  async clickCancelAccount() {
    await this.cancelMyAccountButton.click()
  }

  async handleDialog() {
    await this.page.on('dialog', (dialog) => dialog.accept())
    await this.clickCancelAccount()
  }

  async cancelMyAccount() {
    await this.goto()
    await this.clickCancelAccount()
    await this.handleDialog()
  }
}
