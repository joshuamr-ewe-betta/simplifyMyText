'use server';

import { promises as fs } from 'fs';

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function submitTextToSimplify(
  htmlEntered: string
): Promise<{ simplifiedVersion: string }> {
  const system = await await fs.readFile(
    process.cwd() + '/src/app/handlers/anthropicSystem.txt',
    'utf8'
  );

  const msg = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20240620',
    max_tokens: 1000,
    temperature: 0,
    system,

    messages: [
      {
        role: 'user',
        content: [
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
