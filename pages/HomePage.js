export default class HomePage {
  async visit() {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.waitForSelector(`#search-query`);
  }

  async isNavbarDisplayed() {
    await page.waitForSelector(`.nav-link.active`);
    await page.waitForSelector(`.nav-link.dropdown-toggle[href='#']`);
    await page.waitForSelector(`.nav-link[data-test='nav-contact']`);
    await page.waitForSelector(`.nav-link[data-test='nav-sign-in']`);
    await page.waitForSelector(`#language`);
  }

  async clickHomePageLink() {
    await page.click(`.nav-link.active`);
  }

  async clickContactLink() {
    await page.click(`.nav-link[data-test='nav-contact']`);
  }

  async clickSignInLink() {
    await page.click(`.nav-link[data-test='nav-sign-in']`);
  }

  async clickLanguageLink() {
    await page.click(`#language`);
  }
}
