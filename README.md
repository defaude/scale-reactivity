# Scale + React = ❤️ ?

In this repo, I'm documenting a few issues I'm running into when trying to use the Scale components with React.

## Inconsistent "getting started" documentation

The code snippet for the custom element loader on https://github.com/telekom/scale#setup-with-a-bundler-or-es-modules
looks like this:

```ts
applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

However, the documentation
on https://www.brand-design.telekom.com/scale/?path=/story/scale-for-developers-scale-and-react--page&globals=locale:en
simply states:

```ts
import { defineCustomElements } from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

// ...

defineCustomElements();
```

Both seem to work, but which one is the "correct" and most recent one?

## Dev server logs full of warnings regarding source maps

Even though the app itself seems to work, the dev server's log is full of messages like this:

```
WARNING in ./node_modules/@telekom/scale-components-react/dist/react-component-lib/utils/case.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/code/scale-issues/node_modules/@telekom/scale-components-react/src/react-component-lib/utils/case.ts' file: Error: ENOENT: no such file or directory, open '/code/scale-issues/node_modules/@telekom/scale-components-react/src/react-component-lib/utils/case.ts'
 @ ./node_modules/@telekom/scale-components-react/dist/react-component-lib/utils/index.js 62:13-30
 @ ./node_modules/@telekom/scale-components-react/dist/react-component-lib/createComponent.js 27:16-34
 @ ./node_modules/@telekom/scale-components-react/dist/react-component-lib/index.js 7:24-52
 @ ./node_modules/@telekom/scale-components-react/dist/components.js 13:30-62
 @ ./node_modules/@telekom/scale-components-react/dist/index.js 24:13-36
 @ ./src/App.tsx 5:0-64 10:35-48
 @ ./src/index.tsx 7:0-28 15:33-36
```

## Funky reactivity / component value binding

Both inputs in [App.ts](src/App.tsx) are supposed to "reject" all "a" characters (i.e. simply remove it immediately when
one is detected. This is achieved using an effect that fires whenever the `text` value is updated. The normal HTML input
works just fine: Trying to type an "a" in there just won't do.

However: When using the Scale TextField, the effect is triggering correctly (state value gets updated properly) but the
Scale TextField still shows the "a" character(s) at the end. It seems that the value change from the outside is not
properly reflected into the component's internal state?
