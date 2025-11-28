'use server';

import Anthropic from '@anthropic-ai/sdk';
import { system, message1 } from './simplifyPrompt';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function submitTextToSimplify(
  htmlEntered: string
): Promise<{ simplifiedVersion: string }> {
  // @ts-expect-error the types are correct
  const msg = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
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
              'Simplify this html using the system prompt, and returning the response in html.  Please only return the html of the simplified version.  Please make sure all bullet points in the response are formatted as html: ' +
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
