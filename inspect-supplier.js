import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://bcci.prokraya.ai/signin');
  await page.fill('input[type="email"]', 'adarsh.devulapally@prokraya.com');
  await page.fill('input[type="password"]', 'Test@123');
  await page.click('button:has-text("Sign In")');
  await page.waitForURL('**/app/**', { timeout: 60000 });
  console.log('Logged in, url=', page.url());
  await page.click('button:has-text("Invite Supplier")');
  await page.waitForTimeout(5000);
  const inputCount = await page.locator('input').count();
  const placeholders = await page.locator('input').evaluateAll(els => els.map(e => e.getAttribute('placeholder')));
  const labels = await page.locator('label').allTextContents();
  console.log('input count', inputCount);
  console.log('placeholders', placeholders);
  console.log('labels', labels);
  await page.screenshot({ path: 'invite-supplier.png', fullPage: true });
  await browser.close();
})();
