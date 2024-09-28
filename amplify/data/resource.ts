import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  SimplifiedVersion: a
    .model({
      numberOfCharactersForOriginalVersion: a.integer().required(),
      numberOfCharactersForSimplifiedVersion: a.integer().required(),
      userEmailAddress: a.string().required(),
      updatedAt: a.datetime().required(),
      simplifiedVersionFeedbackSubmissions: a.hasMany(
        'SimplifiedVersionFeedbackSubmission',
        'simplifiedVersionId'
      ),
    })
    .secondaryIndexes((index) => [
      index('userEmailAddress').sortKeys(['updatedAt']),
    ])
    .authorization((allow) => [allow.owner().to(['create', 'read', 'update'])]),
  // .authorization((allow) => [allow.guest()]),
  SimplifiedVersionFeedbackSubmission: a
    .model({
      simplifiedVersionId: a.id().required(),
      feedbackScore: a.enum([
        'NOT_HELPFUL',
        'SOMEWHAT_HELPFUL',
        'VERY_HELPFUL',
      ]),
      updatedAt: a.datetime().required(),
      writtenFeedback: a.string(),
      simplifiedVersion: a.belongsTo(
        'SimplifiedVersion',
        'simplifiedVersionId'
      ),
    })
    .secondaryIndexes((index) => [
      index('feedbackScore').sortKeys(['updatedAt']),
    ])
    .authorization((allow) => [allow.owner().to(['create', 'read', 'update'])]),
  FrequentlyAskedQuestion: a
    .model({
      question: a.string(),
      answer: a.string(),
      displayOrder: a.integer(),
    })
    .authorization((allow) => [allow.guest()]),
  AnthropicSystemPrompt: a
    .model({
      systemPrompt: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
    apiKeyAuthorizationMode: { description: 'serverSideAuth' },
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
