#!/bin/bash

# Helper script to set up AWS credentials and generate amplify_outputs.json

echo "Amplify Setup Helper"
echo "===================="
echo ""

# Check if credentials file exists
if [ -f ~/.aws/credentials ]; then
    echo "✓ Found AWS credentials file"
else
    echo "✗ AWS credentials file not found at ~/.aws/credentials"
    echo "  Please create it with your AWS access keys"
    exit 1
fi

# Option 1: Try using environment variables from credentials file
echo ""
echo "Attempting to read credentials from ~/.aws/credentials..."
echo ""

# Extract credentials (this assumes [default] profile)
AWS_ACCESS_KEY_ID=$(grep -A 2 "\[default\]" ~/.aws/credentials | grep "aws_access_key_id" | awk -F'=' '{print $2}' | tr -d ' ')
AWS_SECRET_ACCESS_KEY=$(grep -A 2 "\[default\]" ~/.aws/credentials | grep "aws_secret_access_key" | awk -F'=' '{print $2}' | tr -d ' ')

if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
    echo "✗ Could not extract credentials from ~/.aws/credentials"
    echo ""
    echo "Please set environment variables manually:"
    echo "  export AWS_ACCESS_KEY_ID=your_key"
    echo "  export AWS_SECRET_ACCESS_KEY=your_secret"
    echo "  export AWS_REGION=us-east-1"
    echo ""
    echo "Then run: npx ampx sandbox --once"
    exit 1
fi

echo "✓ Extracted credentials"
echo ""
echo "Setting environment variables and running Amplify sandbox..."
echo ""

export AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY
export AWS_REGION=${AWS_REGION:-us-east-1}

# Run the sandbox
npx ampx sandbox --once

