import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const fontStack = `'Nirmala UI', 'Iskoola Pota', 'Noto Sans Sinhala', 'Sinhala Sangam MN', sans-serif`;

// 1. Swiss Block Logo (solid crimson square, white 'ම')
const swissBlockSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="#E11D48"/>
  <text x="32" y="34" dominant-baseline="central" text-anchor="middle" font-size="46" font-weight="900" font-family="${fontStack}" fill="#FFFFFF">&#x0db8;</text>
</svg>`;

// 2. Technical Frame Logo (1px crimson border, 10% fill, crimson 'ම')
const techFrameSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect x="2" y="2" width="60" height="60" fill="#E11D48" fill-opacity="0.1" stroke="#E11D48" stroke-width="2.5"/>
  <text x="32" y="34" dominant-baseline="central" text-anchor="middle" font-size="46" font-weight="900" font-family="${fontStack}" fill="#E11D48">&#x0db8;</text>
</svg>`;

// 3. Standalone Bare Glyph (transparent background, crimson 'ම')
const glyphSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <text x="32" y="34" dominant-baseline="central" text-anchor="middle" font-size="52" font-weight="900" font-family="${fontStack}" fill="#E11D48">&#x0db8;</text>
</svg>`;

async function main() {
  const logosDir = path.resolve('public', 'logos');
  if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
  }

  // Save the 3 logos
  fs.writeFileSync(path.join(logosDir, 'logo-swiss-block.svg'), swissBlockSvg.trim());
  fs.writeFileSync(path.join(logosDir, 'logo-tech-frame.svg'), techFrameSvg.trim());
  fs.writeFileSync(path.join(logosDir, 'logo-glyph.svg'), glyphSvg.trim());
  console.log('Saved 3 logos to public/logos/');

  // Put 3rd one as public/favicon.svg
  fs.writeFileSync(path.resolve('public', 'favicon.svg'), glyphSvg.trim());
  console.log('Updated public/favicon.svg with 3rd logo (bare glyph)');

  // Generate public/favicon.ico containing a 48x48 PNG of the 3rd logo
  const png48 = await sharp(Buffer.from(glyphSvg))
    .resize(48, 48)
    .png()
    .toBuffer();

  // Create valid ICO buffer
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // ICO type
  icoHeader.writeUInt16LE(1, 4); // 1 image

  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(48, 0); // Width
  icoEntry.writeUInt8(48, 1); // Height
  icoEntry.writeUInt8(0, 2);  // Color count
  icoEntry.writeUInt8(0, 3);  // Reserved
  icoEntry.writeUInt16LE(1, 4); // Color planes
  icoEntry.writeUInt16LE(32, 6); // Bits per pixel
  icoEntry.writeUInt32LE(png48.length, 8); // Size of image data
  icoEntry.writeUInt32LE(22, 12); // Offset of image data (6 + 16 = 22)

  const icoBuffer = Buffer.concat([icoHeader, icoEntry, png48]);
  fs.writeFileSync(path.resolve('public', 'favicon.ico'), icoBuffer);
  console.log('Generated public/favicon.ico (48x48 PNG embedded)');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
