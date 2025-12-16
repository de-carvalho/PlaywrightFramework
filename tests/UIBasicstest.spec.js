const {test, chromium} = require('@playwright/test');

test('Browser Context PlayWright test', async ({browser})=>
{
    const context = await browser.newContext(); // inicializar browser
    const page = await context.newPage(); // abrir nova pagina
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // acessar url
    console.log(await page.title()); // verifica titulo da pagina

});

test('Page PlayWright test', async ({page})=>
{

    await page.goto("https://google.com");
    console.log(await page.title());

});