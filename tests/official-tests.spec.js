const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5500/index.html');
  });


test('Add note and confirm it shows on the page', async ({ page }) => {
    let newNote = page.getByPlaceholder('What needs to be done?');
    await newNote.fill('Feed red pandas');
    await newNote.press('Enter');

    await expect(page.locator('.active')).toHaveText('Feed red pandas');
});
//await expect(page.getByTestId('todo-title')).toHaveText()

test('Add a note and confirm that the page shows "1 item left". Then, check the note and confirm that the page shows "0 items left', async ({ page }) => {
    let newNote = page.getByPlaceholder('What needs to be done?');
    await newNote.fill('Destroy the Death Star');
    await newNote.press('Enter');

    await expect(page)
  
});

test('Add 3 notes, check one of them, and confirm that the page shows "2 items left"', async ({ page }) => {
    let newNote = page.getByPlaceholder('What needs to be done?');
    await newNote.fill('Feed red pandas');
    await newNote.press('Enter'); 
  
    await newNote.fill('Style Brad Pitt');
    await newNote.press('Enter'); 
  
    await newNote.fill('Come up with a quiz for next lecture');
    await newNote.press('Enter'); 
  
    
});
  