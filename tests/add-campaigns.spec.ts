import { test } from '../utils/test'
import { RegisterPage } from '../page/register.page'
import { expect } from '@playwright/test'
import { generateRandomString } from '../helpers/helper'
import { CampaignsPage } from '../page/campaigns.page'
import { EditUserPage } from '../page/edit-user.page'

const { name, email, password } = generateRandomString()

test.describe('Logged in user successfully adds campaigns', () => {
  test('User adds campaign', async ({ page, constants }) => {
    const registerPage = new RegisterPage(page, constants)
    const campaignsPage = new CampaignsPage(page, constants)
    const editUserPage = new EditUserPage(page, constants)

    await registerPage.register(name, email, password)
    const successMessage = page.locator('#flash_notice')

    await campaignsPage.verifyAddingCampaign(name)
    await expect(successMessage).toContainText(
      'Campaign was successfully created.',
    )
    const campaignElement = page.locator(
      `(//td[contains(text(),'${name}')])[1]`,
    )
    await expect(campaignElement).toBeVisible()

    await editUserPage.cancelMyAccount()
    const successAccountCancel = page.locator('#flash_notice')
    await expect(successAccountCancel).toContainText(
      'Bye! Your account has been successfully cancelled. We hope to see you again soon.',
    )
  })
})
