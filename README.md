# String to Tailwind Color

Generates a random but deterministic Tailwind CSS color and shade from a string

[![ci](https://github.com/jamieweavis/string-to-tailwind-color/workflows/ci/badge.svg)](https://github.com/jamieweavis/string-to-tailwind-color/actions)
[![dependencies](https://img.shields.io/badge/dependencies-0-green)](https://npmjs.com/package/string-to-tailwind-color)
[![coverage](https://img.shields.io/badge/coverage-100%25-green)](https://npmjs.com/package/string-to-tailwind-color)
[![downloads](https://img.shields.io/npm/dt/string-to-tailwind-color.svg)](https://npmjs.com/package/string-to-tailwind-color)
[![version](https://img.shields.io/npm/v/string-to-tailwind-color.svg)](https://github.com/jamieweavis/string-to-tailwind-color/releases)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jamieweavis/string-to-tailwind-color/blob/main/LICENSE)

## Install

Install from npm with your favourite package manager:

```sh
# npm
npm install string-to-tailwind-color

# yarn
yarn add string-to-tailwind-color

# pnpm
pnpm add string-to-tailwind-color

# bun
bun add string-to-tailwind-color
```

## Usage

Generate a random but deterministic Tailwind CSS color and shade from a string:

```javascript
import { stringToTailwindColor } from 'string-to-tailwind-color';

const foo = stringToTailwindColor('foo');
console.log(foo); // 'teal-500'

const bar = stringToTailwindColor('bar');
console.log(bar); // 'emerald-100'
```

By default all colors and shades are used - to use a subset of colors and/or shades, you can pass an options object as the second argument:

```javascript
import { stringToTailwindColor } from 'string-to-tailwind-color';

const foo = stringToTailwindColor('foo', {
  colors: ['red', 'green', 'blue'],
  shades: [300, 500, 700],
});

console.log(foo); // 'red-300'
```

> [!NOTE]
> For a full list of colors and shades see [https://tailwindcss.com/docs/colors](https://tailwindcss.com/docs/colors)


If you don't like the color generated for a particular string, you can use the `hashOffset` option to rotate the color (incrementing by 1 will give you a shade higher, decrementing by 1 will give you a shade lower, colors will also rotate):

```javascript
import { stringToTailwindColor } from 'string-to-tailwind-color';

const a = stringToTailwindColor('foo');
console.log(a); // 'teal-500'

const b = stringToTailwindColor('foo', { hashOffset: 1 });
console.log(b); // 'teal-600'

const c = stringToTailwindColor('foo', { hashOffset: 11 });
console.log(c); // 'cyan-500'
```

Use in combination with background color (`bg-`), text color (`text-`), border color (`border-`), etc:

```javascript
import { stringToTailwindColor } from 'string-to-tailwind-color';

const SomeComponent = ({ text }) => {
  const color = stringToTailwindColor(text);
  return (
    <p className={`bg-${color} text-${color} border-${color}`}>
      {text}
    </p>
  );
};
```

> [!NOTE]
> For a full list of classes compatible with colors see [https://tailwindcss.com/docs/colors#using-color-utilities](https://tailwindcss.com/docs/colors#using-color-utilities)

## Use cases

Generate a color for a tag component based on it's contents:

```javascript
import { stringToTailwindColor } from 'string-to-tailwind-color';

const Tag = ({ name }) => {
  const color = stringToTailwindColor(name, {
    colors: ['red', 'green', 'blue', 'yellow', 'purple', 'pink'],
    shades: [300, 400, 500, 600, 700],
  });
  return (
    <span className={`bg-${color} text-white px-2 py-1 rounded`}>
      {name}
    </span>
  );
};
```


## Development

### Prerequisites

- [Node.js](https://github.com/nodejs/node) (>=18.x.x)
- [pnpm](https://github.com/pnpm/pnpm) (>=10.x.x)

### Getting Started

Clone the repository and install dependencies:

```sh
git clone https://github.com/jamieweavis/string-to-tailwind-color.git

cd string-to-tailwind-color

pnpm install
```

Run all tests with [Vitest](https://github.com/vitest-dev/vitest):

```sh
pnpm test
```

Check the code for linting and formatting issues with [Biome](https://github.com/biomejs/biome):

```sh
pnpm check
```

Build the package with [Parcel](https://github.com/parcel-bundler/parcel):

```sh
pnpm build
```
