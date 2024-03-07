const LoginPage = require("../pages/login.page");
describe("Demo test POM", () => {
  it("Login test with POM", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await LoginPage.checkMessage("Secure Area");

    // await $("#username").setValue("tomsmith");
    // await $("#password").setValue("SuperSecretPassword!");
    // await $('button[type="submit"]').click();
    // await expect($('//*[@id="content"]/div/h2')).toHaveText("Secure Area");
  });
});
