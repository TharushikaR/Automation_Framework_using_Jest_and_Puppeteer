import BasePage from "./BasePage.js";

export default class ContactPage extends BasePage {
  async visit() {
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("https://practicesoftwaretesting.com/#/contact", {
      waitUntil: "domcontentloaded",
    });
  }

  async isFeedbackFormDisplayed() {
    await page.waitForSelector(`#first_name`);
    await page.waitForSelector(`#last_name`);
    await page.waitForSelector(`#email`);
    await page.waitForSelector(`#subject`);
    await page.waitForSelector(`#message`);
    await page.waitForSelector(`.btnSubmit`);
  }

  async submitContactForm(fname, lname, email, subject, message) {
    await page.type("#first_name", fname);
    await page.type("#last_name", lname);
    await page.type("#email", email);
    await page.select("#subject", subject);
    await page.type("#message", message);
    await page.click(`.btnSubmit`);
  }
}
