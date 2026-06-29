import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto('http://localhost:3000/leadership', { waitUntil: 'networkidle' });

// Wait for images to load
await page.waitForTimeout(1000);

const screenshotPath = 'c:/Users/aksha/Desktop/projects/citiuscomm-website/leadership-screenshot.png';
await page.screenshot({ path: screenshotPath, fullPage: true });

console.log('Screenshot saved to:', screenshotPath);
await browser.close();
