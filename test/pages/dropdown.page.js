const { expect, $ } = require("@wdio/globals");
class DropdownPage {
  get herokuDD() {
    return $("#dropdown");
  }
  get heroKuVal() {
    return $("//select[@id='dropdown']");
  }
  async dropDownClick() {
    await this.herokuDD.click();
    // await this.herokuDD.selectByIndex(value);
  }
  async dropDownValue(value) {
    await this.heroKuVal.selectByVisibleText(value);
  }
  async DDValue() {
    return (await this.herokuDD.getValue()).toString();
  }
}
module.exports = new DropdownPage();
