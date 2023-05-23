Test Repo to reproduce an error; When embedding a Sanity Studio 3.11.1 in a Next 13.4.3 app, and installing the sanity-plugin-mux-input@2.0.17 an error occurs:

```
ESM packages (media-chrome/dist/react) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/sanity-plugin-mux-input/lib/\_chunks/index-3999f947.cjs
./node_modules/sanity-plugin-mux-input/lib/index.cjs
./node_modules/sanity-plugin-mux-input/lib/index.cjs.js
./sanity.config.js
./app/admin/[[...index]]/page.js
```

To reproduce the error you can:

1. Clone the repo by running `git clone https://github.com/marnauortega/next-sanity-mux-test`
2. Run `npm run dev`
3. Visit the main url localhost:3000
