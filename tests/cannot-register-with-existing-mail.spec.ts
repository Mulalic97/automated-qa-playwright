import { test } from '../utils/test'
import { RegisterPage } from '../page/register.page'
import { expect } from '@playwright/test'

import { generateRandomString } from '../helpers/helper'
import { EditUserPage } from '../page/edit-user.page'
import { LoginPage } from '../page/login.page'

const { name, email, password } = generateRandomString()

test.describe('Existing email register', () => {
  test('User registers', async ({ page, constants }) => {
    const registerPage = new RegisterPage(page, constants)
    const editUserPage = new EditUserPage(page, constants)
    const loginPage = new LoginPage(page, constants)

    await registerPage.register(name, email, password)
    const successRegister = page.locator('#flash_notice')
    await expect(successRegister).toBeVisible()
    await expect(successRegister).toContainText(
      'Welcome! You have signed up successfully.',
    )
    const signOutButton = await page.$('a[href="/users/sign_out"]')
    await signOutButton.click()

    await registerPage.register(name, email, password)
    const errorMessage = await page.locator('#error_explanation')
    await expect(errorMessage).toBeVisible()

    await loginPage.login(email, password)

    await editUserPage.cancelMyAccount()
    const successAccountCancel = page.locator('#flash_notice')
    await expect(successAccountCancel).toContainText(
      'Bye! Your account has been successfully cancelled. We hope to see you again soon.',
    )
  })
})
