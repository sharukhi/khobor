
import { UserScope , handleLogto } from '@logto/sveltekit';
import { env } from '$env/dynamic/private';

export const handle = handleLogto(
  {
    endpoint: env.LOGTO_ENDPOINT as string,
    appId: env.LOGTO_APP_ID as string,
    appSecret: env.LOGTO_APP_SECRET as string,
    scopes: [UserScope.Email]
  },
  {
    encryptionKey: env.LOGTO_COOKIE_ENCRYPTION_KEY as string,
  },  
);

