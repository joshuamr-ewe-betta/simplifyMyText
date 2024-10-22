import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePageContent from '../HomePageContent';
import { generateClient } from 'aws-amplify/api';
import '@anthropic-ai/sdk';
import { TextSubmissionProvider } from '../contexts/textSubmissionContext';

jest.mock('aws-amplify/data', () => {
  return {
    generateClient: jest.fn().mockReturnValue({
      models: {
        SimplifiedVersion: {
          create: jest.fn(),
        },
      },
    }),
  };
});

jest.mock('@anthropic-ai/sdk', () => {
  return jest.fn().mockImplementation(() => {
    return {
      messages: {
        create: jest.fn(),
      },
    };
  });
});

const textInputId = 'textInputId';

jest.mock('react-quill', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return jest.fn().mockImplementation((props: any) => (
    <textarea
      {...props}
      onChange={(event) => props.onChange(event.target.value)}
      data-testid={textInputId}
    >
      {props.children}
    </textarea>
  ));
});

describe('Home', () => {
  test('should allow user to submit text', async () => {
    const user = userEvent.setup();
    render(
      <TextSubmissionProvider>
        <HomePageContent />
      </TextSubmissionProvider>
    );

    const submitText = await screen.findByRole('button', {
      name: 'Score and Shorten',
    });
    expect(submitText).toBeDisabled();

    screen.debug();

    const textEntry = await screen.findByTestId(textInputId);

    await user.clear(textEntry);

    await user.type(textEntry, 'This is a new text entry.');
    expect(submitText).not.toBeDisabled();
  });
});
