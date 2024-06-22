import BasePage from "./BasePage.js";

export default class LoginPage extends BasePage {
  async visit() {
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("https://practicesoftwaretesting.com/", {
      waitUntil: "domcontentloaded",
    });
  }

  async isLoginFormDisplayed() {
    await page.waitForSelector(`.nav-link[data-test='nav-sign-in']`);
    await page.click(`.nav-link[data-test='nav-sign-in']`);
    await page.waitForSelector(`input[value='Login']`);
    await page.waitForSelector(`#email`);
    await page.waitForSelector(`#password`);
  }

  async login(username, password) {
    await page.waitForSelector(`input[value='Login']`);
    await page.type("#email", username);
    await page.type("#password", password);
    await page.click(`input[value='Login']`);
  }
}
