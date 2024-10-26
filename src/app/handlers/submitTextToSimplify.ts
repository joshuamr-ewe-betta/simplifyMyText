'use server';

import Anthropic from '@anthropic-ai/sdk';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
Amplify.configure(outputs);

import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { system, message1 } from './simplifyPrompt';

const client = generateClient<Schema>({
  authMode: 'apiKey',
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function submitTextToSimplify(
  htmlEntered: string
): Promise<{ simplifiedVersion: string }> {
  // @ts-expect-error the types are correct
  const msg = await anthropic.beta.promptCaching.messages.create({
    model: 'claude-3-5-sonnet-20240620',
    max_tokens: 1024,
    system,
    messages: [
      {
        role: 'user',
        content: [
          message1,
          {
            type: 'text',
            text:
              'Simplify this html using the system prompt, and returning the response in html.  Please only return the html of the simplified version: ' +
              htmlEntered,
          },
        ],
      },
    ],
  });

  // @ts-expect-error .text does exist
  const simplifiedVersion = msg.content[0].text;

  return {
    simplifiedVersion,
  };
}
