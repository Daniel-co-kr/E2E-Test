import { test, expect } from '@playwright/test'
import { Auth } from '../../pages/auth.page'
import { HomePage } from '../../pages/home.page'

test.describe('Sign up tests', () => {
  let auth: Auth
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    auth = new Auth(page)
    homePage = new HomePage(page)
    await homePage.goTo()
  })

  const signupProcess = async () => {
    //get email address ~~ process
  }

  test('Sign up via homepage', async () => {
    await auth.clickSignupButton()
    await auth.page.waitForSelector(
      'div.flex.h-full.flex-col.items-center.justify-center'
    )
    expect(await auth.signupModalVisible()).toBe(true)
    await signupProcess()

    const isLoginButtonVisible = await auth.loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true)
  })

  test('Sign up via log in modal', async () => {
    await auth.clickLoginButton()
    await auth.page.waitForSelector(
      'div.flex.h-full.w-full.flex-col.justify-between'
    )
    expect(await auth.loginModalVisible()).toBe(true)
    await auth.clickSignupButtonInLoginModal()
    await auth.page.waitForSelector(
      'div.flex.h-full.flex-col.items-center.justify-center'
    )
    expect(await auth.signupModalVisible()).toBe(true)
    await signupProcess()

    //when Log in processed right after the sign up process, the test code must be changed. (Will not be proceeded.)

    const isLoginButtonVisible = await auth.loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true)
  })
})
