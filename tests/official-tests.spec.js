const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5500/index.html');
});


test('Add note and confirm it shows on the page', async ({ page }) => {
    let newNote = page.getByPlaceholder('What needs to be done?');
    await newNote.fill('Feed red pandas');
    await newNote.press('Enter');

    await expect(page.locator('.active p')).toHaveText('Feed red pandas');
});

test('Add a note and confirm that the page shows "1 item left". Then, check the note and confirm that the page shows "0 items left', async ({ page }) => {
    let newNote = page.getByPlaceholder('What needs to be done?');
    await newNote.fill('Destroy the Death Star');
    await newNote.press('Enter');

    await expect(page.locator('#items-left')).toHaveText('1 item left');

});

test('Add 3 notes, check one of them, and confirm that the page shows "2 items left"', async ({ page }) => {
    let newNote = page.getByPlaceholder('What needs to be done?');
    await newNote.fill('Feed red pandas');
    await newNote.press('Enter');
    await newNote.fill('Style Brad Pitt');
    await newNote.press('Enter');
    await newNote.fill('Come up with a quiz for next lecture');
    await newNote.press('Enter');
    let checkbox = await page.locator('#notes-container > li:nth-child(1) > input');
    await checkbox.click();

    await expect(page.locator('#items-left')).toHaveText('2 items left');

});
