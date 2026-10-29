import { chromium } from "playwright";
const b = await chromium.launch();
for (const [name, w, h, dark] of [["desk", 1366, 900, false], ["mob", 390, 844, false], ["dark", 1366, 900, true]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, colorScheme: dark ? "dark" : "light" });
  await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `/tmp/pf-${name}.png` });
  if (name === "desk") await p.screenshot({ path: `/tmp/pf-full.png`, fullPage: true });
}
await b.close();
