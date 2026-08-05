import fs from 'fs';
import path from 'path';
const srcDir = './src/components';
const files = fs.readdirSync(srcDir);
for (const file of files) {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    if (content.includes('<img ') && !content.includes('loading="lazy"') && file !== 'Hero.tsx' && file !== 'Navbar.tsx') {
      content = content.replaceAll('<img ', '<img loading="lazy" ');
      fs.writeFileSync(path.join(srcDir, file), content);
      console.log('Updated ' + file);
    }
  }
}
