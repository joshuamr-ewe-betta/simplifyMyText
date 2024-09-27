/* eslint-disable no-empty */
import { useTextSubmission } from './contexts/textSubmissionContext';
import { createSimplifiedVersion } from './dbMethods';
import { submitTextToSimplify } from './handlers/submitTextToSimplify';
import { getTextLengthForHtml } from './utils.ts/getTextLengthForHtml';
import { fetchUserAttributes } from '@aws-amplify/auth';

export function useSubmitText(): { submitText: () => Promise<void> } {
  const { handleAiResponse, htmlEntered, handleChangeIsSubmittingText } =
    useTextSubmission();
  const submitText = async () => {
    handleChangeIsSubmittingText(true);

    try {
      const response = await submitTextToSimplify(htmlEntered);

      const numberOfCharactersForSimplifiedVersion = getTextLengthForHtml(
        response.simplifiedVersion
      );

      const numberOfCharactersForOriginalVersion =
        getTextLengthForHtml(htmlEntered);

      const attributes = await fetchUserAttributes();
      const { email } = attributes;
      console.log('email', email);
      const simplifiedVersionResponse = await createSimplifiedVersion({
        numberOfCharactersForOriginalVersion,
        numberOfCharactersForSimplifiedVersion,
        email: email || '',
      });
      console.log('simplifiedVersionResponse', simplifiedVersionResponse);

      handleAiResponse(
        response.simplifiedVersion,
        {
          numberOfCharactersForSimplifiedVersion,
          numberOfCharactersForOriginalVersion,
        },
        simplifiedVersionResponse?.id
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {}
    handleChangeIsSubmittingText(false);
  };

  return { submitText };
}
