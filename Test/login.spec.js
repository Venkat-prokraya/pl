// Playwright test script for Prokraya login page
// Save as: login.spec.js

import { test, expect } from '@playwright/test';

test('User should login successfully', async ({ page }) => {

  // Open login page
  await page.goto('https://qa.prokraya.ai/signin');
  await expect(page.getByTestId('text-login-title')).toBeVisible();
  await expect(page.getByText('Sign in to your account to')).toBeVisible();
  await expect(page.getByText('Domain Name')).toBeVisible();
  //await expect(page.getByTextId('input-Domain')).toBeVisible();
  await expect(page.getByText('Email')).toBeVisible();
  await expect(page.getByTestId('input-email')).toBeVisible();
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await expect(page.getByTestId('input-password')).toBeVisible();
  await expect(page.getByTestId('input-password')).toBeVisible();
  await expect(page.getByTestId('button-toggle-password')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible();
  await expect(page.getByText('Other Signin Options')).toBeVisible();
  await expect(page.getByTestId('button-login')).toBeVisible();
  await expect(page.getByText('New Supplier?')).toBeVisible();
  //await page.locator('.lucide.lucide-building2').click();
  await expect(page.getByText('Register your company to')).toBeVisible();
  //await expect(page.getByText('.prokraya.ai')).toBeVisible();
  await page.getByTestId('input-email').fill('Adarsh12@gmail.com');
  await page.getByTestId('input-password').fill('Test@123');
  await page.getByTestId('button-login').click();
await page.waitForTimeout(2000);
});

