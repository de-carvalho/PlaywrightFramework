const {test, expect} = require('@playwright/test');

test.only('Browser Context-Validating Error login', async ({page})=> {

    await page.goto("https://rahulshettyacademy.com/client");

    const userEmail = page.locator('#userEmail');
    const userPassword = page.locator('#userPassword');

    await userEmail.fill("anshika@gmail.com");
    await userPassword.fill("Iamking@000");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();

    console.log(titles);

    //const userRegister = page.locator('a.btn1');
    //await userRegister.click();

    // Enter client informations
    //await page.locator("#firstName").fill("Teste Teste");
    //await page.locator("#lastName").fill("Teste Teste")
    //await page.locator("#userEmail").fill("teste@teste.com");
    //await page.locator('#userMobile').fill("14998909887");
    //await page.locator('select:visible').click();
    //await page.locator('option').nth(3).click();
    
});