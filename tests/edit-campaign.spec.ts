import { test } from '../utils/test'
import { RegisterPage } from '../page/register.page'
import { expect } from '@playwright/test'
import { generateRandomString } from '../helpers/helper'
import { CampaignsPage } from '../page/campaigns.page'
import { EditUserPage } from '../page/edit-user.page'

const { name, email, password } = generateRandomString()

test.describe('Logged in user successfully edits campaign', () => {
  test('User edits campaign', async ({ page, constants }) => {
    const registerPage = new RegisterPage(page, constants)
    const campaignsPage = new CampaignsPage(page, constants)
    const editUserPage = new EditUserPage(page, constants)
    const popUpMessage = page.locator('#flash_notice')

    await registerPage.register(name, email, password)
    await expect(popUpMessage).toBeVisible()
    await expect(popUpMessage).toContainText(
      'Welcome! You have signed up successfully.',
    )

    await campaignsPage.verifyAddingCampaign(name)
    await expect(popUpMessage).toContainText(
      'Campaign was successfully created.',
    )
    const campaignElement = page.locator(
      `(//td[contains(text(),${name.toString()})])[1]`,
    )
    await expect(campaignElement).toBeVisible()

    await campaignsPage.verifyEditingCampaign('random')
    await expect(popUpMessage).toContainText(
      'Campaign was successfully updated.',
    )
    const editedCampaignElement = page.locator(
      "(//td[contains(text(),'random')])[1]",
    )
    await expect(editedCampaignElement).toBeVisible()

    await editUserPage.cancelMyAccount()
    await expect(popUpMessage).toContainText(
      'Bye! Your account has been successfully cancelled. We hope to see you again soon.',
    )
  })
})
