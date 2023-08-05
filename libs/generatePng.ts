import puppeteer from "puppeteer";

const generatePng = async (html: string, css: string, outputPath: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const content = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  await page.setContent(content, { waitUntil: "networkidle0" });

  const dimensions = await page.evaluate(() => {
    const { width, height } = document.documentElement.getBoundingClientRect();
    return { width, height };
  });

  await page.setViewport(dimensions);
  await page.screenshot({ path: outputPath, fullPage: true });

  await browser.close();
};

export default generatePng;
