import{test,expect} from '@playwright/test';

test('Valid signup', async ({ page }) => {
await page.goto('https://qa.prokraya.ai/register');
await page.getByTestId('link-register-vendor').click();
await page.getByTestId('input-company-name').fill('Rinku');
await expect(page.getByTestId('input-company-name')).toHaveValue('Rinku');
await page.getByTestId('input-contact-name').fill('Rinku');
await page.getByTestId('input-email').fill('rinku@gmail.com');
await page.getByTestId('input-phone').fill('9663773353');
await page.getByTestId('select-country').click();
//await page.getByTestId('select-country').click();
await page.getByRole('option', { name: 'India' }).click();
//const options=await page.$$('select-country');
//let status=false;
//
await page.getByTestId('input-designation').fill('Manager');
await page.getByTestId('input-department').fill('IT');
await page.getByTestId('input-password').fill('Test@123');
await page.getByTestId('input-confirm-password').fill('Test@123');
await page.waitForTimeout(20000);
await page.getByTestId('checkbox-terms').check();
await page.getByTestId('button-signup').click();
await expect(page).toHaveURL('https://qa.prokraya.ai/register');
await page.getByTestId('button-go-to-login').click();
await expect(page).toHaveURL('https://qa.prokraya.ai/signin');
});

//test('User should login successfully', async ({ page }) => {

  // Open login page
//   await page.goto('https://qa.prokraya.ai/signin');
//   await page.getByTestId('input-email').fill('rinku@gmail.com');
//   await page.getByTestId('input-password').fill('Test@123');
//   await page.getByTestId('button-login').click();
// await page.waitForTimeout(10000);
// });






