/* eslint-disable no-empty */
import { useTextSubmission } from '../contexts/textSubmissionContext';
import { createSimplifiedVersion } from '../dbMethods';
import { submitTextToSimplify } from '../handlers/submitTextToSimplify';
import { getDataForHtml } from '../utils.ts/getTextLengthForHtml';
import { fetchUserAttributes } from '@aws-amplify/auth';

export function useSubmitText(): { submitText: () => Promise<void> } {
  const { handleAiResponse, htmlEntered, handleChangeIsSubmittingText } =
    useTextSubmission();

  const submitText = async () => {
    handleChangeIsSubmittingText(true);

    try {
      const response = await submitTextToSimplify(htmlEntered);

      const {
        length: numberOfCharactersForSimplifiedVersion,
        text: simplifiedVersion,
      } = getDataForHtml(response.simplifiedVersion);

      const {
        length: numberOfCharactersForOriginalVersion,
        text: originalVersion,
      } = getDataForHtml(htmlEntered);

      const attributes = await fetchUserAttributes();
      const { email } = attributes;
      const simplifiedVersionResponse = await createSimplifiedVersion({
        simplifiedVersion,
        originalVersion,
        numberOfCharactersForOriginalVersion,
        numberOfCharactersForSimplifiedVersion,
        email: email || '',
      });

      handleAiResponse(
        response.simplifiedVersion,
        {
          numberOfCharactersForSimplifiedVersion,
          numberOfCharactersForOriginalVersion,
        },
        simplifiedVersionResponse?.id
      );
    } catch (error) {}
    handleChangeIsSubmittingText(false);
  };

  return { submitText };
}
