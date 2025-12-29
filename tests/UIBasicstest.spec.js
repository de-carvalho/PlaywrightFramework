const {test, expect} = require('@playwright/test');

test('Browser Context PlayWright test', async ({browser})=>
{
    const userName = page.locator("#username");
    const context = await browser.newContext(); // inicializar browser
    const page = await context.newPage(); // abrir nova pagina
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // acessar url
    console.log(await page.title()); // verifica titulo da pagina

    await userName.fill("teste automacao");
    await page.locator("[type='password']").fill("123456");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill()

});

// test('Page PlayWright test', async ({page})=>
// {

//     await page.goto("https://google.com");
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Google");

// });