import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { FeedbackScore } from '../../types/feedbackScore';

const schema = a.schema({
  SimplifiedVersion: a
    .model({
      numberOfCharactersForOriginalVersion: a.integer().required(),
      numberOfCharactersForSimplifiedVersion: a.integer().required(),
      userEmailAddress: a.string().required(),
      createdAt: a.datetime().required(),
      simplifiedVersionFeedbackSubmissions: a.hasMany(
        'SimplifiedVersionFeedbackSubmissions',
        'simplifiedVersionId'
      ),
    })
    .secondaryIndexes((index) => [
      index('userEmailAddress').sortKeys(['createdAt']),
    ])
    .authorization((allow) => [allow.owner().to(['create', 'read', 'update'])]),
  // .authorization((allow) => [allow.guest()]),
  SimplifiedVersionFeedbackSubmission: a
    .model({
      simplifiedVersionId: a.id().required(),
      feedbackScore: a.enum([
        FeedbackScore.NOT_HELPFUL,
        FeedbackScore.SOMEWHAT_HELPFUL,
        FeedbackScore.VERY_HELPFUL,
      ]),
      writtenFeedback: a.string(),
      updatedAt: a.datetime().required(),
      simplifiedVersion: a.belongsTo(
        'SimplifiedVersion',
        'simplifiedVersionId'
      ),
    })
    .secondaryIndexes((index) => [
      index('feedbackScore').sortKeys(['updatedAt']),
    ])
    .authorization((allow) => [allow.owner().to(['create', 'read', 'update'])]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
