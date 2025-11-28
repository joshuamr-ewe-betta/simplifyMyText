# Node.js Version Upgrade Plan

## Current Situation
- AWS Amplify has ended support for Node.js 14, 16, and 18
- Your project uses `@types/node: ^20`, indicating Node 20 is expected
- Next.js 14.2.7 requires Node.js 18.17.0 or later (Node 20 recommended)
- AWS SDK crypto module issues may be resolved with Node.js 20

## Target Version
**Node.js 20.x** (LTS - recommended for Next.js 14 and AWS Amplify)

## Implementation Steps

### Step 1: Create `.nvmrc` file
- Creates a file that specifies Node.js 20 for local development
- Tools like `nvm` will automatically use this version

### Step 2: Update `package.json`
- Add `engines` field to specify Node.js version requirement
- Helps npm/yarn warn if wrong version is used

### Step 3: Create `amplify.yml`
- AWS Amplify build configuration file
- Explicitly sets Node.js version during build
- Ensures consistent builds across environments

### Step 4: Update Amplify Console Settings (Manual)
- Navigate to AWS Amplify Console → Your App → App Settings → Build settings
- Under "Live package updates", ensure Node.js version is set to 20
- Or switch to Amazon Linux 2023 build image (supports Node 20 by default)

### Step 5: Test Locally
- Install Node.js 20 locally
- Run `npm install` to ensure dependencies work
- Test build: `npm run build`

## Files to be Created/Modified
1. `.nvmrc` - NEW
2. `package.json` - MODIFIED (add engines field)
3. `amplify.yml` - NEW

## Verification
After deployment, check build logs in Amplify Console to confirm:
- Node.js version shows as 20.x
- Build completes successfully
- No webpack/crypto module errors

