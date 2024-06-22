import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";
import TopBar from "../pages/components/TopBar";

import * as configData from "../config.js";

describe("End-To-End Test", () => {
  let homepage, topbar, loginpage, contactform;
  beforeAll(async function () {
    jest.setTimeout(2000000);
    homepage = new HomePage();
    loginpage = new LoginPage();
    contactform = new ContactPage();
    topbar = new TopBar();
  });

  beforeEach(async function () {
    jest.useFakeTimers("legacy");
  });

  afterEach(async function () {
    jest.useRealTimers();
  });

  it("Should Load HomePage", async () => {
    await homepage.visit();
    await homepage.isNavbarDisplayed();
  });

  it("Should Submit Contact Form", async () => {
    await contactform.visit();
    await contactform.isFeedbackFormDisplayed();
    await contactform.submitContactForm(
      configData.userFname,
      configData.userLname,
      configData.userEmail,
      configData.serviceType,
      configData.Message
    );
  });
});
