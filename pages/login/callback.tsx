import { LoginCallback } from '@okta/okta-react';

export default function login() {
  // handles callback from Okta & sets the session and token values
  // see https://www.npmjs.com/package/@okta/okta-react#reference
  LoginCallback({});
}
