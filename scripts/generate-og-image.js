import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f1f23" stroke-width="1" stroke-opacity="0.6"/>
    </pattern>
    <style>
      .mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; }
      .sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#09090b"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Top Swiss Accent Border -->
  <rect x="0" y="0" width="1200" height="6" fill="#e53935"/>

  <!-- Top Metadata Bar -->
  <line x1="60" y1="70" x2="1140" y2="70" stroke="#27272a" stroke-width="1"/>
  
  <rect x="60" y="38" width="18" height="18" fill="#e53935"/>
  <text x="69" y="52" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle" font-family="'Nirmala UI', 'Iskoola Pota', 'Noto Sans Sinhala', sans-serif">ම</text>
  <text x="90" y="52" fill="#fafafa" font-size="13" font-weight="700" letter-spacing="2" class="mono">MANUJA.DEV // CYBERSECURITY DOSSIER</text>
  
  <circle cx="950" cy="47" r="4" fill="#10b981"/>
  <text x="965" y="52" fill="#a1a1aa" font-size="12" font-weight="600" letter-spacing="1" class="mono">AVAILABLE FOR AUDITS</text>
  <text x="1140" y="52" fill="#71717a" font-size="12" font-weight="600" letter-spacing="1" text-anchor="end" class="mono">UTC+05:30</text>

  <!-- Section index tag -->
  <text x="60" y="145" fill="#e53935" font-size="14" font-weight="700" letter-spacing="3" class="mono">// CYBERSECURITY SPECIALIST &amp; SYSTEMS ENGINEER</text>

  <!-- Main Headline Typography -->
  <text x="60" y="235" fill="#fafafa" font-size="82" font-weight="900" letter-spacing="-2" class="sans">MANUJA</text>
  <text x="60" y="320" fill="#fafafa" font-size="82" font-weight="900" letter-spacing="-2" class="sans">MEDHANKARA</text>

  <!-- Subtitle statement -->
  <text x="60" y="380" fill="#a1a1aa" font-size="20" font-weight="400" class="sans">Engineering resilient defensive architectures &amp; conducting offensive security assessments.</text>
  <text x="60" y="410" fill="#71717a" font-size="16" font-weight="400" class="sans">Penetration Testing · Linux Infrastructure Hardening · High-Performance Open Source Tooling</text>

  <!-- 3 Pillar Capability Cards -->
  <!-- Card 1 -->
  <rect x="60" y="455" width="340" height="110" fill="#111114" stroke="#27272a" stroke-width="1"/>
  <rect x="60" y="455" width="4" height="110" fill="#e53935"/>
  <text x="80" y="485" fill="#e53935" font-size="11" font-weight="700" letter-spacing="1.5" class="mono">01 // AUDITING</text>
  <text x="80" y="510" fill="#fafafa" font-size="15" font-weight="700" class="sans">Penetration Testing</text>
  <text x="80" y="535" fill="#a1a1aa" font-size="12" class="mono">OWASP Top 10 · Web &amp; API Security</text>

  <!-- Card 2 -->
  <rect x="430" y="455" width="340" height="110" fill="#111114" stroke="#27272a" stroke-width="1"/>
  <rect x="430" y="455" width="4" height="110" fill="#e53935"/>
  <text x="450" y="485" fill="#e53935" font-size="11" font-weight="700" letter-spacing="1.5" class="mono">02 // DEFENSE</text>
  <text x="450" y="510" fill="#fafafa" font-size="15" font-weight="700" class="sans">Linux Hardening</text>
  <text x="450" y="535" fill="#a1a1aa" font-size="12" class="mono">CIS Benchmarks · Kernel sysctl · Zero Trust</text>

  <!-- Card 3 -->
  <rect x="800" y="455" width="340" height="110" fill="#111114" stroke="#27272a" stroke-width="1"/>
  <rect x="800" y="455" width="4" height="110" fill="#e53935"/>
  <text x="820" y="485" fill="#e53935" font-size="11" font-weight="700" letter-spacing="1.5" class="mono">03 // TOOLING</text>
  <text x="820" y="510" fill="#fafafa" font-size="15" font-weight="700" class="sans">VulnRadar &amp; Systems</text>
  <text x="820" y="535" fill="#a1a1aa" font-size="12" class="mono">Rust · Tauri v2 · Automated Scanners</text>

  <!-- Bottom Details -->
  <line x1="60" y1="590" x2="1140" y2="590" stroke="#27272a" stroke-width="1"/>
  <text x="60" y="612" fill="#71717a" font-size="11" font-weight="600" letter-spacing="1.5" class="mono">CANONICAL: HTTPS://MANUJA.DEV</text>
  <text x="1140" y="612" fill="#71717a" font-size="11" font-weight="600" letter-spacing="1" text-anchor="end" class="mono">SWISS ARCHITECTURE // PGP: 0x4E5AB5C</text>
</svg>
`;

async function generate() {
  const publicDir = path.resolve('./public');
  const svgPath = path.join(publicDir, 'og-image.svg');
  const pngPath = path.join(publicDir, 'og-image.png');

  fs.writeFileSync(svgPath, svg, 'utf-8');
  console.log('✓ Written public/og-image.svg');

  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(pngPath);
  console.log('✓ Generated public/og-image.png (1200x630)');
}

generate().catch(console.error);
