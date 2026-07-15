const fs = require("fs");
const path = require("path");

const PRODUCTS_JS = path.join(__dirname, "../src/data/products.js");
const CATEGORY_DIR = path.join(__dirname, "../assets/kategori");
const PRODUCTS_DIR = path.join(__dirname, "../assets/products");


function readProductsMeta() {
  const content = fs.readFileSync(PRODUCTS_JS, "utf8");
  const regex = /id:\s*(\d+),\s*title:\s*"([^"]+)",\s*category:\s*"([\w-]+)"/g;
  const products = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    products.push({ id: Number(match[1]), title: match[2], category: match[3] });
  }
  return products;
}

function main() {
  const products = readProductsMeta();
  if (products.length === 0) {
    console.error("Tidak ada produk terbaca dari products.js. Cek lagi path filenya.");
    process.exit(1);
  }

  let success = 0;
  let skipped = 0;

  for (const p of products) {
    const sourceFile = path.join(CATEGORY_DIR, `${p.category}.png`);
    const targetFile = path.join(PRODUCTS_DIR, `${p.id}.png`);

    if (!fs.existsSync(sourceFile)) {
      console.warn(`⚠️  Lewati id ${p.id} (${p.title}): foto kategori "${p.category}.png" tidak ditemukan`);
      skipped++;
      continue;
    }

    fs.copyFileSync(sourceFile, targetFile);
    success++;
  }

  console.log(`\n✅ Selesai! ${success} foto produk ter-update, ${skipped} dilewati.`);
  console.log("Jalankan ulang: npx expo start -c\n");
}

main();
