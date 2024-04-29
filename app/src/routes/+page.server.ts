// +page.server.ts
import type { Actions } from './$types';

export const actions: Actions = {
  signIn: async ({ locals }) => {
    await locals.logtoClient.signIn('http://localhost:3000/callback');
  },
  signOut: async ({ locals }) => {
    await locals.logtoClient.signOut('http://localhost:3000/');
  },
};