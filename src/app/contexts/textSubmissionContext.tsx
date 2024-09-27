import { createContext, useContext, useState } from 'react';

export interface SimplificationData {
  numberOfCharactersForSimplifiedVersion: number;
  numberOfCharactersForOriginalVersion: number;
}

const TextSubmissionContext = createContext<
  | {
      aiResponseHtml: string | undefined;
      isSubmittingText: boolean;
      handleChangeIsSubmittingText: (isSubmitting: boolean) => void;
      simplificationData: SimplificationData | undefined;
      handleAiResponse: (
        updatedAiResponse: string | undefined,
        updatedSimplificationData: SimplificationData | undefined,
        updatedSimplifiedVersionId: string | undefined
      ) => void;
      htmlEntered: string;
      handleInputHtmlToSimplify: (updatedHtml: string) => void;
      simplifiedVersionId: string | undefined;
      simplifiedVersionFeedbackSubmissionId: string | undefined;
      onCreateFeedbackSubmission: (newFeedbackSubmissionId: string) => void;
      resetSimplifiedVersionFeedbackSubmissionId: () => void;
    }
  | undefined
>(undefined);

export function TextSubmissionProvider({ children }: React.PropsWithChildren) {
  const [htmlEntered, setHtmlEntered] = useState('');
  const [isSubmittingText, setIsSubmittingText] = useState(false);
  const [aiResponseHtml, setAiResponseHtml] = useState<string | undefined>();
  const [simplificationData, setSimplificationData] = useState<
    SimplificationData | undefined
  >();
  const [simplifiedVersionId, setSimplifiedVersionId] = useState<
    string | undefined
  >();
  const [
    simplifiedVersionFeedbackSubmissionId,
    setSimplifiedVersionFeedbackSubmissionId,
  ] = useState<string | undefined>();

  const handleChangeIsSubmittingText = (isSubmitting: boolean) => {
    setIsSubmittingText(isSubmitting);
  };

  const onCreateFeedbackSubmission = (newFeedbackSubmissionId: string) => {
    setSimplifiedVersionFeedbackSubmissionId(newFeedbackSubmissionId);
  };

  const resetSimplifiedVersionFeedbackSubmissionId = () => {
    setSimplifiedVersionFeedbackSubmissionId(undefined);
  };

  const handleInputHtmlToSimplify = (updatedHtml: string) => {
    if (aiResponseHtml) {
      setAiResponseHtml(undefined);
      setSimplificationData(undefined);
      setSimplifiedVersionId(undefined);
      setSimplifiedVersionFeedbackSubmissionId(undefined);
    }

    setHtmlEntered(updatedHtml);
  };

  const handleAiResponse = (
    updatedAiResponse: string | undefined,
    updatedSimplificationData: SimplificationData | undefined,
    updatedSimplifiedVersionId: string | undefined
  ) => {
    setAiResponseHtml(updatedAiResponse);
    setSimplificationData(updatedSimplificationData);
    setSimplifiedVersionId(updatedSimplifiedVersionId);
  };

  const value = {
    handleChangeIsSubmittingText,
    isSubmittingText,
    aiResponseHtml,
    handleAiResponse,
    simplificationData,
    htmlEntered,
    handleInputHtmlToSimplify,
    simplifiedVersionId,
    simplifiedVersionFeedbackSubmissionId,
    onCreateFeedbackSubmission,
    resetSimplifiedVersionFeedbackSubmissionId,
  };
  return (
    <TextSubmissionContext.Provider value={value}>
      {children}
    </TextSubmissionContext.Provider>
  );
}

export function useTextSubmission() {
  const context = useContext(TextSubmissionContext);
  if (context === undefined) {
    throw new Error(
      'useTextSubmission must be used within a TextSubmissionContext'
    );
  }
  return context;
}
