import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";
import TopBar from "../pages/components/TopBar";

describe("Example", () => {
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

  it("Homepage should work", async () => {
    await homepage.visit();
  });

  it("Navbar should be displayed", async () => {
    await homepage.isNavbarDisplayed();
    await topbar.isTopBarDisplayed();
  });

  it("Try to Login", async () => {
    await loginpage.visit();
    await loginpage.isLoginFormDisplayed();
    await loginpage.login(`admin@practicesoftwaretesting.com`, `welcome01`);
    // await loginpage.wait(5000);
  }, 2000000);

  it("Feedback should work", async () => {
    await contactform.visit();
    await contactform.isFeedbackFormDisplayed();
    await contactform.submitContactForm(
      "John",
      "David",
      "test123@gmail.com",
      "customer-service",
      "Test Message using Puppeteer Automation. Test Message using Puppeteer Automation."
    );
  }, 2000000);
});
