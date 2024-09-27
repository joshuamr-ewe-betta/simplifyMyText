'use client';
import classes from './page.module.scss';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import './authentication.scss';
import { TextSubmissionProvider } from './contexts/textSubmissionContext';
import HomePageContent from './HomePageContent';

Amplify.configure(outputs);

export default function Home() {
  return (
    <main className={classes.main}>
      <Authenticator>
        <TextSubmissionProvider>
          <div className={classes['main-mobile-protection']}>
            <div className={classes['main-mobile-protection-content']}>
              Simplify My Text is not available on mobile devices
            </div>
          </div>
          <HomePageContent />
        </TextSubmissionProvider>
      </Authenticator>
    </main>
  );
}
