class LoginPage {
  get usernameTextBox() {
    return $("#username");
  }
  get passwordTextBox() {
    return $("#password");
  }
  get loginButton() {
    return $('button[type="submit"]');
  }
  get loginMessage() {
    return $('//*[@id="content"]/div/h2');
  }

  // actions
  //   enterUserName() {}
  //   enterPassword() {}
  //   clickLoginBtn() {}
  // or
  async login(username, password) {
    await this.usernameTextBox.setValue(username);
    await this.passwordTextBox.setValue(password);
    await this.loginButton.click();
  }
  async checkMessage(message) {
    await expect(this.loginMessage).toHaveText(message);
  }
}
module.exports = new LoginPage();
