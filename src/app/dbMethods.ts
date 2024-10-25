import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import { FeedbackScore } from '../../types/feedbackScore';

const client = generateClient<Schema>();

interface SimplifiedVersion {
  id: string;
  numberOfCharactersForOriginalVersion: number;
  numberOfCharactersForSimplifiedVersion: number;
  userEmailAddress: string;
  updatedAt: string;
}

interface SimplifiedVersionFeedbackSubmission {
  id: string;
  simplifiedVersionId: string;
  feedbackScore:
    | 'NOT_HELPFUL'
    | 'SOMEWHAT_HELPFUL'
    | 'VERY_HELPFUL'
    | undefined
    | null;
  updatedAt: string;
  writtenFeedback: string | undefined | null;
}

interface SimplifiedVersionFeedbackSubmissionCreationParams {
  simplifiedVersionId: string;
  feedbackScore?:
    | 'NOT_HELPFUL'
    | 'SOMEWHAT_HELPFUL'
    | 'VERY_HELPFUL'
    | undefined
    | null;
  writtenFeedback?: string | undefined | null;
}

export async function createSimplifiedVersion({
  numberOfCharactersForOriginalVersion,
  numberOfCharactersForSimplifiedVersion,
  simplifiedVersion,
  originalVersion,
  email,
}: {
  numberOfCharactersForOriginalVersion: number;
  numberOfCharactersForSimplifiedVersion: number;
  simplifiedVersion: string;
  originalVersion: string;
  email: string;
}): Promise<SimplifiedVersion | undefined> {
  const response = await client.models.SimplifiedVersion.create(
    {
      userEmailAddress: email || '',
      updatedAt: new Date().toISOString(),
      numberOfCharactersForOriginalVersion,
      numberOfCharactersForSimplifiedVersion,
      simplifiedVersion,
      originalVersion,
    },
    {
      authMode: 'userPool',
    }
  );
  return response?.data || undefined;
}

export async function createSimplifiedVersionFeedbackSubmission(
  simplifiedVersionFeedbackSubmission: SimplifiedVersionFeedbackSubmissionCreationParams
): Promise<SimplifiedVersionFeedbackSubmission | undefined> {
  const response =
    await client.models.SimplifiedVersionFeedbackSubmission.create(
      {
        ...simplifiedVersionFeedbackSubmission,
        updatedAt: new Date().toISOString(),
      },
      {
        authMode: 'userPool',
      }
    );
  return response?.data || undefined;
}

export async function updateSimplifiedVersionFeedbackSubmission(
  simplifiedVersionFeedbackSubmissionId: string,
  updates: {
    feedbackScore?: FeedbackScore | undefined | null;
    writtenFeedback?: string | undefined | null;
  }
) {
  await client.models.SimplifiedVersionFeedbackSubmission.update(
    {
      id: simplifiedVersionFeedbackSubmissionId,
      ...updates,
    },
    {
      authMode: 'userPool',
    }
  );
}
