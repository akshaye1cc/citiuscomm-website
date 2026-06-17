import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto('http://localhost:3000/leadership', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

const screenshotPath = 'c:/Users/aksha/Desktop/projects/citiuscomm-website/leadership-final.png';
await page.screenshot({ path: screenshotPath, fullPage: true });

console.log('✓ Screenshot saved');
await browser.close();
