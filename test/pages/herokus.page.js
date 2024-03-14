class HeroKu {
  get authentication() {
    return $("//div[@class='example']/p");
  }
  async authVal() {
    return await this.authentication.getText();
  }
}
module.exports = new HeroKu();
