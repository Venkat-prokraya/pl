//test,youtube,click on sarch button enter the random data then click the search icon click on shots and videos and unwatched
import { test, expect } from '@playwright/test';

test('Valid login', async ({ page }) => {

  await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cricket');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('tab', { name: 'Videos' }).click();
   await page.getByRole('tab', { name: 'Shorts' }).click();
   await page.getByRole('tab', { name: 'Unwatched' }).click();
   await page.waitForTimeout(5000);


})
