export default class TopBar {
  async isTopBarDisplayed() {
    await page.waitForSelector(`#navbarSupportedContent`);
    await page.waitForSelector(`.nav-link[data-test='nav-sign-in']`);
  }

  async clickSignInButton() {
    await page.click(`.nav-link[data-test='nav-sign-in']`);
  }
}
