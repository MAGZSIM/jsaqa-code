const { test, expect } = require("@playwright/test");
import { login, pass } from "./User";

test('Success authorization', async ({ page }) => {
    await page.goto('https://netology.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(login);
    await page.getByTestId('cookies-submit-btn').click();
    await page.getByPlaceholder('Пароль').click();
    await page.getByPlaceholder('Пароль').fill(pass);
    await page.getByTestId('login-submit-btn').click();
    //await page.pause();
    await expect(page).toHaveURL("https://netology.ru/profile");
});

test('Unsuccessful authorization', async ({ page }) => {
    await page.goto('https://netology.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill("email@ya.ru");
    await page.getByTestId('cookies-submit-btn').click();
    await page.getByPlaceholder('Пароль').click();
    await page.getByPlaceholder('Пароль').fill("Qwerty2");
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByTestId('login-error-hint')).toContainText('Вы ввели неправильно логин или пароль');
});