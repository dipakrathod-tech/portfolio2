/**
 * Icon Generator Script
 *
 * This script generates all required PWA icons from your icon.svg file.
 *
 * Prerequisites:
 * 1. Install sharp: npm install sharp --save-dev
 * 2. Ensure public/icon.svg exists
 * 3. Run: node scripts/generate-icons.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Icon sizes to generate
const iconSizes = [
  { size: 72, filename: "icon-72x72.png" },
  { size: 96, filename: "icon-96x96.png" },
  { size: 128, filename: "icon-128x128.png" },
  { size: 144, filename: "icon-144x144.png" },
  { size: 152, filename: "icon-152x152.png" },
  { size: 180, filename: "apple-touch-icon.png" },
  { size: 192, filename: "android-chrome-192x192.png" },
  { size: 384, filename: "icon-384x384.png" },
  { size: 512, filename: "android-chrome-512x512.png" },
];

// Maskable icon sizes (with safe area padding)
const maskableSizes = [
  { size: 192, innerSize: 154, filename: "maskable-icon-192x192.png" },
  { size: 512, innerSize: 410, filename: "maskable-icon-512x512.png" },
];

// Shortcut icon sizes
const shortcutIcons = [
  { name: "projects", size: 96 },
  { name: "certifications", size: 96 },
  { name: "resume", size: 96 },
];

async function generateIcons() {
  const svgPath = path.join(process.cwd(), "public", "icon.svg");
  const publicDir = path.join(process.cwd(), "public");
  const shortcutsDir = path.join(publicDir, "shortcuts");

  // Check if icon.svg exists
  if (!fs.existsSync(svgPath)) {
    console.error("❌ Error: public/icon.svg not found!");
    console.log(
      "Please ensure your icon.svg file exists in the public folder."
    );
    process.exit(1);
  }

  console.log("🎨 Starting icon generation...\n");

  // Create shortcuts directory if it doesn't exist
  if (!fs.existsSync(shortcutsDir)) {
    fs.mkdirSync(shortcutsDir, { recursive: true });
    console.log("📁 Created shortcuts directory\n");
  }

  const svg = fs.readFileSync(svgPath);

  // Generate standard icons
  console.log("🖼️  Generating standard icons...");
  for (const icon of iconSizes) {
    try {
      await sharp(svg)
        .resize(icon.size, icon.size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(path.join(publicDir, icon.filename));

      console.log(
        `   ✅ Generated ${icon.filename} (${icon.size}x${icon.size})`
      );
    } catch (error) {
      console.error(
        `   ❌ Failed to generate ${icon.filename}:`,
        error.message
      );
    }
  }

  // Generate maskable icons (with safe area)
  console.log("\n🎭 Generating maskable icons (with safe area)...");
  for (const icon of maskableSizes) {
    try {
      const padding = Math.floor((icon.size - icon.innerSize) / 2);

      await sharp(svg)
        .resize(icon.innerSize, icon.innerSize, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: { r: 10, g: 10, b: 10, alpha: 1 }, // Dark background to match theme
        })
        .png()
        .toFile(path.join(publicDir, icon.filename));

      console.log(
        `   ✅ Generated ${icon.filename} (${icon.size}x${icon.size} with ${padding}px padding)`
      );
    } catch (error) {
      console.error(
        `   ❌ Failed to generate ${icon.filename}:`,
        error.message
      );
    }
  }

  // Generate shortcut icons
  console.log("\n🔗 Generating shortcut icons...");
  for (const shortcut of shortcutIcons) {
    try {
      await sharp(svg)
        .resize(shortcut.size, shortcut.size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(path.join(shortcutsDir, `${shortcut.name}-icon.png`));

      console.log(
        `   ✅ Generated ${shortcut.name}-icon.png (${shortcut.size}x${shortcut.size})`
      );
    } catch (error) {
      console.error(
        `   ❌ Failed to generate ${shortcut.name}-icon.png:`,
        error.message
      );
    }
  }

  console.log("\n✨ Icon generation complete!");
  console.log("\n📋 Next steps:");
  console.log("   1. Take screenshots for /public/screenshots/");
  console.log("   2. Run: pnpm build");
  console.log(
    "   3. Test manifest in Chrome DevTools (Application → Manifest)"
  );
  console.log("   4. Test PWA installation\n");
}

// Run the generator
generateIcons().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
