# NextJS & Okta Example

## Getting Started
This is a basic example of using Okta to authenticate users for a NextJS app. This does not implement a custom form, but relies on the standard log-in page to allow a user to log in.

## Dependencies
- a valid Okta account with an OpenID Connect app configured
- Okta NPM packages (`@okta/okta-auth-js` and `@okta/okta-react`)

## Install
- Clone this repo
- Install dependencies
```bash
npm install
```
- create `.env.local` file by copying the `.env.local.example` file and updating the values from Okta
```bash
cp .env.local.example .env.local
```
- run the app/
```bash
npm run dev
```