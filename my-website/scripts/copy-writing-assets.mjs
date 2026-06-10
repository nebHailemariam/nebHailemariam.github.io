import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content/writing");
const publicDir = path.join(root, "public/writing");

function copyAssets(sourceDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyAssets(sourcePath, destPath);
      continue;
    }

    if (entry.name.endsWith(".md")) continue;

    fs.copyFileSync(sourcePath, destPath);
  }
}

if (!fs.existsSync(contentDir)) {
  process.exit(0);
}

fs.mkdirSync(publicDir, { recursive: true });

for (const entry of fs.readdirSync(contentDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  copyAssets(
    path.join(contentDir, entry.name),
    path.join(publicDir, entry.name)
  );
}
