const puppeteer = require('puppeteer');

module.exports.handler = (event, context, callback) => {

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://lapl.overdrive.com/', { waitUntil: 'load' });
    
    // await page.screenshot({ path: './screenshots/lapl.png'});
    // await page.focus('input#nav-search');
    await page.type('#nav-search', 'harry potter');
    await page.click('button.js-doQuickSearch');

    await page.waitForNavigation();
    // await page.screenshot({ path: './screenshots/harry-potter.png'});
    browser.close();    
    
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify('Screenshot Taken :)'),
    });
  })();
}