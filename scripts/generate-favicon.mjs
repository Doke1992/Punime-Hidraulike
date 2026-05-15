/**
 * Generates favicon.ico and favicon.png from scratch using only Node built-ins.
 * Design: navy #0B3A66 background, white H, cyan #00AEEF water drop.
 */
import { deflateSync } from 'zlib';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '../public');

// ── CRC32 ────────────────────────────────────────────────────────────────────
const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
  CRC_TABLE[n] = c;
}
function crc32(buf) {
  let v = 0xFFFFFFFF;
  for (const b of buf) v = CRC_TABLE[(v ^ b) & 0xFF] ^ (v >>> 8);
  return (v ^ 0xFFFFFFFF) >>> 0;
}

// ── PNG encoder ──────────────────────────────────────────────────────────────
function chunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}

function encodePNG(w, h, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0); ihdrData.writeUInt32BE(h, 4);
  ihdrData[8] = 8; ihdrData[9] = 6; // 8-bit RGBA

  const rows = [];
  for (let y = 0; y < h; y++) {
    rows.push(0); // filter: None
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      rows.push(rgba[i], rgba[i+1], rgba[i+2], rgba[i+3]);
    }
  }

  return Buffer.concat([
    sig,
    chunk('IHDR', ihdrData),
    chunk('IDAT', deflateSync(Buffer.from(rows), { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ── Drawing helpers ──────────────────────────────────────────────────────────
function makeCanvas(size) {
  const rgba = new Uint8Array(size * size * 4);

  const set = (x, y, r, g, b, a = 255) => {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || x >= size || y < 0 || y >= size) return;
    const i = (y * size + x) * 4;
    rgba[i] = r; rgba[i+1] = g; rgba[i+2] = b; rgba[i+3] = a;
  };

  const fillRect = (x1, y1, x2, y2, r, g, b) => {
    for (let y = Math.round(y1); y <= Math.round(y2); y++)
      for (let x = Math.round(x1); x <= Math.round(x2); x++)
        set(x, y, r, g, b);
  };

  const fillCircle = (cx, cy, cr, r, g, b) => {
    for (let y = Math.floor(cy - cr); y <= Math.ceil(cy + cr); y++)
      for (let x = Math.floor(cx - cr); x <= Math.ceil(cx + cr); x++)
        if ((x-cx)**2 + (y-cy)**2 <= cr**2) set(x, y, r, g, b);
  };

  return { rgba, set, fillRect, fillCircle };
}

// ── Icon renderer ────────────────────────────────────────────────────────────
function drawIcon(size) {
  const { rgba, set, fillRect, fillCircle } = makeCanvas(size);
  const s = size / 64; // scale: design coords are 0-64

  // Background (navy blue)
  fillRect(0, 0, size - 1, size - 1, 0x0B, 0x3A, 0x66);

  // Rounded corners (transparent)
  const r = 10 * s;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = Math.min(x, size - 1 - x);
      const dy = Math.min(y, size - 1 - y);
      if (dx < r && dy < r) {
        const dist = Math.sqrt((r - dx - 0.5) ** 2 + (r - dy - 0.5) ** 2);
        if (dist > r) set(x, y, 0, 0, 0, 0);
      }
    }
  }

  // H left bar: design x=7-17, y=6-39
  fillRect(7*s, 6*s, 17*s, 39*s, 255, 255, 255);
  // H right bar: design x=46-56, y=6-39
  fillRect(46*s, 6*s, 56*s, 39*s, 255, 255, 255);
  // H crossbar: design x=7-56, y=20-29
  fillRect(7*s, 20*s, 56*s, 29*s, 255, 255, 255);

  // Water drop: teardrop at design (32, 44-63)
  // Circle body: center (32, 57), r=7
  const cx = 32 * s, cy = 57 * s, cr = 7 * s;
  fillCircle(cx, cy, cr, 0x00, 0xAE, 0xEF);
  // Pointed tip above the circle (parabolic taper)
  const tipY = 44 * s, midY = cy - cr;
  for (let y = Math.round(tipY); y < Math.round(midY); y++) {
    const t = (y - tipY) / (midY - tipY); // 0=tip, 1=circle edge
    const hw = cr * Math.sqrt(t);
    for (let x = Math.round(cx - hw); x <= Math.round(cx + hw); x++)
      set(x, y, 0x00, 0xAE, 0xEF);
  }

  return rgba;
}

// ── ICO format ───────────────────────────────────────────────────────────────
function createICO(pngBuf, w, h) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: ICO
  header.writeUInt16LE(1, 4); // 1 image

  const entry = Buffer.alloc(16);
  entry[0] = w >= 256 ? 0 : w;
  entry[1] = h >= 256 ? 0 : h;
  entry[2] = 0; // color count (0 = true color)
  entry[3] = 0; // reserved
  entry.writeUInt16LE(1, 4);  // planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuf.length, 8);
  entry.writeUInt32LE(22, 12); // offset = 6 + 16

  return Buffer.concat([header, entry, pngBuf]);
}

// ── Generate files ────────────────────────────────────────────────────────────
// 32x32 → favicon.ico
const rgba32 = drawIcon(32);
const png32  = encodePNG(32, 32, rgba32);
writeFileSync(join(PUBLIC, 'favicon.ico'), createICO(png32, 32, 32));
console.log('✓ favicon.ico  (32×32)');

// 180x180 → favicon.png (apple-touch-icon)
const rgba180 = drawIcon(180);
const png180  = encodePNG(180, 180, rgba180);
writeFileSync(join(PUBLIC, 'favicon.png'), png180);
console.log('✓ favicon.png  (180×180 apple-touch-icon)');
