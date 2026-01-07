const {test, expect} = require('@playwright/test');

test.only('Register client test', async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //const userEmail = page.locator('#userEmail');
    //const userPassword = page.locator('#userPassword');

    const userRegister = page.locator('a.btn1');
    await userRegister.click();

    // Enter client informations
    await page.locator("#firstName").fill("Teste Teste");
    await page.locator("#lastName").fill("Teste Teste")
    await page.locator("#userEmail").fill("teste@teste.com");
    await page.locator('#userMobile').fill("14998909887");
    await page.locator('select:visible').click();
    await page.locator('option').nth(3).click();
    
});