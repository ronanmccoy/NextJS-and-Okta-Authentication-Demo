# NextJS & Okta Example

## Getting Started
This is a basic example of using Okta to authenticate users for a NextJS app. This does not implement a custom form, but relies on the standard Okta log-in page to allow a user to log in.

## Dependencies
- a valid Okta account with an OpenID Connect app configured
- Okta NPM packages (`@okta/okta-auth-js` and `@okta/okta-react`)

## Install
- Clone this repo.
- Install dependencies.
```bash
npm install
```
- Create `.env.local` file by copying the `.env.local.example` file and updating the values from Okta.
```bash
cp .env.local.example .env.local
```
- Run the app.
```bash
npm run dev
```
- The app should be accessible at `http://localhost:3000` (assuming the port number was not changed in `package.json`).

## Configuring Okta
This implementation assumes an OpenID Connect (OIDC) app is set up in Okta. The values for variables in the `.env.local` file are set from the OIDC app configured on Okta. As of 6/15, the following steps can be used to set up the OIDC app.
- Log into Okta as an admin and use the left side navigation to go to Applications -> Applications.
- Click the `Create App Integration` button.
- Select `OIDC (Open ID Connect)`.
- Select `Single-Page application` for the application type.
- Give the app a name (this can be anything).
- Select `Grant Type` and select `Authorization Code`, `Refresh Token`, and `Implicit`.
- Set the sign-in redirect URL. This is the callback when Okta authenticates.
- Set the sign-out redirect URL. This is optional.
- Enable "Federation Broker Mode" (this might need to be done after creating the application integration).

When the application integration is complete, the values needed for the environmental variables will be available by clicking into the application.

## Resources
https://www.npmjs.com/package/@okta/okta-react
https://developer.okta.com/blog/2020/11/13/nextjs-typescript
https://d28m3l9ryqsunl.cloudfront.net/docs/guides/sign-in-to-spa-authjs/react/main/
https://github.com/okta/samples-js-react

## Framework
### NextJS
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
