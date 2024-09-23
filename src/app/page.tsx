'use client';
import { useState } from 'react';
import { Body } from './components/Body/Body';
import { TextEntry } from './components/TextEntry/TextEntry';
import classes from './page.module.scss';
import { submitTextToSimplify } from './handlers/submitTextToSimplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import './authentication.scss';

Amplify.configure(outputs);

export default function Home() {
  const [aiResponse, setAiResponse] = useState('');

  const submitText = async (textEntered: string) => {
    const response = await submitTextToSimplify(textEntered);
    setAiResponse(response.simplifiedVersion);
  };

  return (
    <main className={classes.main}>
      <Authenticator>
        <div className={classes['main-mobile-protection']}>
          <div className={classes['main-mobile-protection-content']}>
            Brevity Check is not available on mobile devices
          </div>
        </div>
        <div className={classes['main-content']}>
          <TextEntry submitText={submitText} />
          <Body aiResponse={aiResponse} />
        </div>
      </Authenticator>
    </main>
  );
}
