import fs from 'fs';
import path from 'path';

const DIST_DIR = './dist';
const adsTxtPath = path.join(DIST_DIR, 'ads.txt');

console.log('🔍 Checking ads.txt in the build directory...');

try {
  // 1. Check if build directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`❌ Error: Build output directory "${DIST_DIR}" does not exist. Run 'npm run build' first.`);
    process.exit(1);
  }

  // 2. Check if ads.txt exists in dist/
  if (!fs.existsSync(adsTxtPath)) {
    console.error('❌ Error: ads.txt was not copied to dist/ads.txt. Please verify your public/ folder setup.');
    process.exit(1);
  }

  // 3. Read and check format
  const content = fs.readFileSync(adsTxtPath, 'utf8').trim();
  console.log(`📄 Found ads.txt content: "${content}"`);

  // Regex to match: google.com, pub-xxxxxxxxxxxxxxxx, DIRECT, f08c47fec0942fa0
  // Supports actual 16-digit IDs or placeholders like pub-xxxxxxxxxxxxxxxx for testing/verification
  const adSenseRegex = /^google\.com,\s*pub-[a-zA-Z0-9]{16},\s*DIRECT,\s*f08c47fec0942fa0$/i;

  if (!adSenseRegex.test(content)) {
    console.warn('⚠️ Warning: The content of ads.txt might not match the standard Google AdSense direct seller format.');
    console.warn('Expected format: google.com, pub-<16-digit-id>, DIRECT, f08c47fec0942fa0');
    // If it's a template placeholder like pub-xxxxxxxxxxxxxxxx, we let it pass but alert the user.
    if (/pub-x+/i.test(content)) {
      console.log('ℹ️ Note: Detected template placeholder (pub-xxxxxxxxxxxxxxxx). Remember to replace it with your actual publisher ID.');
    } else {
      console.error('❌ Validation failed: Invalid format structure.');
      process.exit(1);
    }
  } else {
    console.log('✅ Validation successful: ads.txt matches Google AdSense direct seller format.');
  }

} catch (error) {
  console.error('❌ An error occurred during ads.txt verification:', error);
  process.exit(1);
}
