import { execSync } from "node:child_process";

const otp = process.env.NPM_OTP;
if (!otp) {
  console.error("Set NPM_OTP to your 6-digit authenticator code, then re-run:");
  console.error("  PowerShell: $env:NPM_OTP=\"123456\"; npm run release:npm");
  console.error("  Or CI: gh workflow run release.yml --repo techlestial/uilerial -f npm_otp=123456");
  process.exit(1);
}

execSync("npm run component:build", { stdio: "inherit" });
execSync(`npm publish --access public --otp ${otp}`, { stdio: "inherit" });
console.log("Published @techlestial/uilerial to npmjs.com");
