import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const logoPath = path.join(projectRoot, "public", "logo.webp");
const outputPath = path.join(
  projectRoot,
  "public",
  "social-preview-v3.png",
);

const width = 1200;
const height = 630;

const background = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#032a22"/>
        <stop offset="0.58" stop-color="#063b2e"/>
        <stop offset="1" stop-color="#0b654e"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#d89b12"/>
        <stop offset="0.5" stop-color="#f4cc58"/>
        <stop offset="1" stop-color="#c98706"/>
      </linearGradient>
      <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
        <path d="M 42 0 L 0 0 0 42" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.055"/>
      </pattern>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#background)"/>
    <rect width="${width}" height="${height}" fill="url(#grid)"/>
    <circle cx="1115" cy="72" r="205" fill="#0d765b" opacity="0.38"/>
    <circle cx="1155" cy="590" r="245" fill="#021f19" opacity="0.34"/>
    <path d="M760 0H1200V80L885 225Z" fill="#ffffff" opacity="0.025"/>
    <path d="M718 630H1200V555L835 440Z" fill="#eab93b" opacity="0.08"/>

    <rect x="46" y="44" width="574" height="542" rx="32" fill="#fffdf6"/>
    <rect x="46" y="44" width="574" height="542" rx="32" fill="none" stroke="#f1cf71" stroke-width="3"/>
    <path d="M78 91H188" stroke="url(#gold)" stroke-width="7" stroke-linecap="round"/>
    <text x="333" y="548" text-anchor="middle" fill="#063b2e" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" letter-spacing="4">OFFICIAL CAMPAIGN</text>

    <rect x="686" y="98" width="84" height="7" rx="3.5" fill="url(#gold)"/>
    <text x="686" y="151" fill="#f4cc58" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="700" letter-spacing="5">LAGOS 2027</text>
    <text x="686" y="218" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="29" font-weight="700" letter-spacing="0.5">DR. KADRI OBAFEMI</text>
    <text x="681" y="302" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="900" letter-spacing="-2">HAMZAT</text>
    <rect x="686" y="333" width="432" height="2" fill="#ffffff" opacity="0.22"/>
    <text x="686" y="385" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="700" letter-spacing="1.2">FOR A GREATER LAGOS</text>
    <text x="686" y="432" fill="#c9ded7" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="400">Competence &#8226; Stability &#8226; Innovation &#8226; Inclusion</text>
    <rect x="686" y="490" width="420" height="64" rx="16" fill="#ffffff" opacity="0.09"/>
    <circle cx="719" cy="522" r="6" fill="#f4cc58"/>
    <text x="740" y="530" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="700" letter-spacing="0.5">kadriobafemihamzat.com</text>
  </svg>
`);

const logo = await sharp(logoPath)
  .resize({ width: 506 })
  .png()
  .toBuffer();

await sharp(background)
  .composite([{ input: logo, left: 80, top: 116 }])
  .flatten({ background: "#063b2e" })
  .removeAlpha()
  .png({ compressionLevel: 9, palette: false })
  .toFile(outputPath);

console.log(`Generated ${path.relative(projectRoot, outputPath)} (${width}x${height})`);
