describe("Demo Tests", function () {
  it("First Test", async () => {
    browser.url("https://google.com");
    await $('[name="q"]').setValue("webdriverio");
    // await $('[name="q"]').click();

    await browser.keys("Enter");
    await browser.pause(1000);
  });
});
