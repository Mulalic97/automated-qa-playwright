import { RegisterPage } from '../page/register.page'
import { EditUserPage } from '../page/edit-user.page'
import { test } from '../utils/test'
import { expect } from '@playwright/test'
import { generateRandomString } from '../helpers/helper'

const { name, email, password } = generateRandomString()

test.describe('Register', () => {
  test('User successfully registered', async ({ page, constants }) => {
    const registerPage = new RegisterPage(page, constants)
    const editUserPage = new EditUserPage(page, constants)

    await registerPage.register(name, email, password)
    const successRegister = page.locator('#flash_notice')
    await expect(successRegister).toBeVisible()
    await expect(successRegister).toContainText(
      'Welcome! You have signed up successfully.',
    )

    await editUserPage.cancelMyAccount()
    const successAccountCancel = page.locator('#flash_notice')
    await expect(successAccountCancel).toContainText(
      'Bye! Your account has been successfully cancelled. We hope to see you again soon.',
    )
  })
})
