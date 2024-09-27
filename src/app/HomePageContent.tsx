/* eslint-disable no-empty */
'use client';
import { Body } from './components/Body/Body';
import { TextEntry } from './components/TextEntry/TextEntry';
import classes from './page.module.scss';

import '@aws-amplify/ui-react/styles.css';
import './authentication.scss';

import { useTextSubmission } from './contexts/textSubmissionContext';
import { useSubmitText } from './hooks/useSubmitText';

export default function HomePageContent() {
  const {
    htmlEntered,
    handleInputHtmlToSimplify,
    aiResponseHtml,
    simplificationData,
    isSubmittingText,
    simplifiedVersionId,
  } = useTextSubmission();

  const { submitText } = useSubmitText();

  return (
    <div className={classes['main-content']}>
      <TextEntry
        submitText={submitText}
        inputText={handleInputHtmlToSimplify}
        htmlEntered={htmlEntered}
        isSubmittingText={isSubmittingText}
      />
      <Body
        aiResponseHtml={aiResponseHtml}
        simplificationData={simplificationData}
        simplifiedVersionId={simplifiedVersionId}
      />
    </div>
  );
}
