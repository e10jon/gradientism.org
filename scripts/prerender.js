import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, "..", "dist");

// Simple static file server
function createStaticServer(port) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const filePath = join(distDir, req.url === "/" ? "index.html" : req.url);
      
      try {
        const content = await readFile(filePath);
        const ext = extname(filePath);
        const contentType = {
          ".html": "text/html",
          ".js": "application/javascript",
          ".css": "text/css",
          ".json": "application/json",
          ".png": "image/png",
          ".jpg": "image/jpeg",
          ".svg": "image/svg+xml",
        }[ext] || "text/plain";
        
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      } catch (err) {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    
    server.listen(port, () => {
      resolve(server);
    });
  });
}

async function prerender() {
  const port = 3000;
  const server = await createStaticServer(port);
  
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Navigate to the page
    await page.goto(`http://localhost:${port}/`, {
      waitUntil: "networkidle0",
    });
    
    // Wait a bit for any dynamic content
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Get the rendered HTML
    const html = await page.content();
    
    // Save the prerendered HTML
    const indexPath = join(distDir, "index.html");
    writeFileSync(indexPath, html, "utf-8");
    
    console.log("✅ Prerendered HTML saved to dist/index.html");
    
    await browser.close();
  } finally {
    server.close();
  }
}

prerender().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});

