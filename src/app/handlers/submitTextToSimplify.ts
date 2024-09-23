'use server';

// import { generateClient } from 'aws-amplify/data';
// import type { Schema } from '../../../amplify/data/resource';
import Auth from '@aws-amplify/auth';

// const client = generateClient<Schema>();

export async function submitTextToSimplify(
  textEntered: string
): Promise<{ simplifiedVersionId: string; simplifiedVersion: string }> {
  const attributes = await Auth.fetchUserAttributes();

  const { email } = attributes;

  console.log('textEntered', textEntered);
  console.log('email', email);
  return {
    simplifiedVersionId: '1',
    simplifiedVersion: 'this is simpler',
  };
}
