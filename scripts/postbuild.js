import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('./dist');
const wellKnownSrc = path.resolve('./public/.well-known');
const wellKnownDest = path.join(distDir, '.well-known');

if (fs.existsSync(wellKnownSrc)) {
  fs.mkdirSync(wellKnownDest, { recursive: true });
  fs.cpSync(wellKnownSrc, wellKnownDest, { recursive: true });
  console.log('✓ Copied .well-known to dist/.well-known');
}

const headersSrc = path.resolve('./public/_headers');
const headersDest = path.join(distDir, '_headers');

if (fs.existsSync(headersSrc)) {
  fs.copyFileSync(headersSrc, headersDest);
  console.log('✓ Copied _headers to dist/_headers');
}
