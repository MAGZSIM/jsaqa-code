let page;

describe("Github page tests", () => {

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 6000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 6000);
});


describe("Github page tests other page", () => {

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/enterprise");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("div.text-semibold.lh-condensed");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title1 = await page.title();
    expect(title1).toEqual('GitHub Universe - November 8-9, 2023');
  }, 15000);

  test("The h1 header content2", async () => {
    const secondLink = await page.$("div [id='enterprise-security'] a");
    await secondLink.click();
    await page.waitForTimeout(2000);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('Features · Security · GitHub');
  }, 60000);

  test("The h1 header content3", async () => {
    const thirdLink = await page.$("div.col-12.py-3.mb-2 a");
    await thirdLink.click();
    await page.waitForTimeout(2000);
    await page.waitForSelector('h1');
    const title3 = await page.title();
    expect(title3).toEqual('Features • GitHub Actions · GitHub');
  }, 60000);

});