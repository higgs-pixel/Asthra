const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Capture browser console logs
    page.on('console', msg => {
      console.log(`BROWSER CONSOLE: ${msg.type().toUpperCase()} - ${msg.text()}`);
    });
    
    // Capture page errors (uncaught exceptions)
    page.on('pageerror', err => {
      console.log(`BROWSER ERROR: ${err.message}`);
    });
    
    console.log('Navigating to http://127.0.0.1:5173/admin ...');
    await page.goto('http://127.0.0.1:5173/admin', { waitUntil: 'networkidle0', timeout: 10000 });
    
    await browser.close();
  } catch (err) {
    console.error('SCRIPT ERROR:', err.message);
  }
})();
