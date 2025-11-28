# Amplify Setup Instructions

## Issue: AWS Credentials Configuration

If you're getting errors configuring AWS credentials, here are several solutions:

### Option 1: Use Environment Variables (Recommended)

Instead of using the credentials file, set environment variables:

```bash
export AWS_ACCESS_KEY_ID=your_access_key_here
export AWS_SECRET_ACCESS_KEY=your_secret_key_here
export AWS_REGION=us-east-1
```

Then run:
```bash
npx ampx sandbox --once
```

### Option 2: Fix Credentials File Format

Your `~/.aws/credentials` file should have this exact format:

```
[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

Make sure:
- There are spaces around the `=` signs
- No extra characters or quotes
- The file permissions are correct: `chmod 600 ~/.aws/credentials`

### Option 3: Use a Named Profile

Create a profile in `~/.aws/credentials`:

```
[amplify-dev]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

Then run:
```bash
npx ampx sandbox --once --profile amplify-dev
```

### Option 4: Verify Your Credentials

Your AWS credentials might be expired or invalid. You can verify them by:
1. Logging into the AWS Console
2. Going to IAM → Users → Security Credentials
3. Creating new access keys if needed

### Generate amplify_outputs.json

Once credentials are working, run:
```bash
npx ampx sandbox --once
```

This will:
1. Deploy your Amplify backend (auth and data resources)
2. Generate `amplify_outputs.json` with real AWS resource IDs

### Temporary Development Solution

If you just need the app to compile while setting up AWS, a placeholder file exists, but the app won't function properly until you generate the real file.

