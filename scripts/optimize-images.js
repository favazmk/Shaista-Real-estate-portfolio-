import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log('🔍 Scanning for images to optimize in public/images/...');

const files = fs.readdirSync(imagesDir);
let convertedCount = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    const inputPath = path.join(imagesDir, file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    console.log(`⚡ Converting ${file} ➔ ${baseName}.webp...`);
    try {
      execSync(`convert "${inputPath}" -quality 85 "${outputPath}"`);
      console.log(`✅ Converted: ${baseName}.webp`);
      convertedCount++;
    } catch (err) {
      try {
        execSync(`ffmpeg -i "${inputPath}" -q:v 75 "${outputPath}" -y`);
        console.log(`✅ Converted with FFmpeg: ${baseName}.webp`);
        convertedCount++;
      } catch (ffmpegErr) {
        console.error(`❌ Failed to convert ${file}:`, ffmpegErr.message);
      }
    }
  }
}

console.log(`✨ Image optimization complete. Total converted: ${convertedCount}`);
