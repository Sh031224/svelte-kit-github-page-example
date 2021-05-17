# svelte-kit-github-page-example

This is an example of `github page` distribution by applying TypeScript and Scss to Svelte kit.

Since the version is "next", an error may occur as the version is updated.

`@sveltejs/adapter-static` and `@sveltejs/kit`

## Project composition

Construct a static page with `@sveltejs/adapter-static` and deploy the page to the github page.

### Configuration description

`-t true` option of the `package.json` file is to commit the .nojekyll file.

The reason for creating .nojekyll is that the github page ignores the folder starting with `_ (under-bar)`.

```js
{
  ...
  "scripts": {
    ...
    "deploy": "gh-pages -d build -t true"
  }
}
```

and `svelte.config.js`

```js
import adapter from "@sveltejs/adapter-static";

const config = {
  ...
  kit: {
    ...
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    paths: {
      // YOUR github repository name
      base: "/svelte-kit-github-page-example/",
    },
  },
};
```

## Developing

Once you've created a project and installed dependencies with `yarn`, start a development server:

```bash
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
yarn run build
```

> You can preview the built app with `yarn run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
