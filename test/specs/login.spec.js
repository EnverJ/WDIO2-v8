const LoginPage = require("../pages/login.page");
const DropdownPage = require("../pages/dropdown.page");
const HerokuPage = require("../pages/herokus.page");
// import { assert } from "chai";
describe("Demo test POM", () => {
  it.skip("Login test with POM", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await LoginPage.checkMessage("Secure Area");

    // await $("#username").setValue("tomsmith");
    // await $("#password").setValue("SuperSecretPassword!");
    // await $('button[type="submit"]').click();
    // await expect($('//*[@id="content"]/div/h2')).toHaveText("Secure Area");
  });
  it.skip("dropdown list", async () => {
    await browser.url("https://the-internet.herokuapp.com/dropdown");
    await DropdownPage.dropDownValue("Option 1");
    await browser.pause(3000);
    const selectedOption = await DropdownPage.DDValue();
    console.log(`this selected option${selectedOption}`);
    expect(selectedOption).toEqual("1");
  });
  // authentication handling
  it("authentication handling", async () => {
    const username = "admin";
    const password = "admin";
    await browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`
    );
    await browser.pause(3000);
    const val = await HerokuPage.authVal();
    console.log(`this is ${val}`);
    const actualVal = "Congratulations! You must have the proper credentials.";
    await expect(val).toEqual(actualVal);
  });
});
