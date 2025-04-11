# String to Tailwind Color

> Generates a random but deterministic Tailwind CSS color and shade from a string

[![ci](https://github.com/jamieweavis/string-to-tailwind-color/workflows/ci/badge.svg)](https://github.com/jamieweavis/string-to-tailwind-color/actions)
[![downloads](https://img.shields.io/npm/dt/string-to-tailwind-color.svg)](https://npmjs.com/package/string-to-tailwind-color)
[![version](https://img.shields.io/npm/v/string-to-tailwind-color.svg)](https://github.com/jamieweavis/string-to-tailwind-color/releases)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jamieweavis/string-to-tailwind-color/blob/main/LICENSE)

## Install

```sh
npm install string-to-tailwind-color
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


If you don't like the color generated for a particular string, you can use the `hashOffset` option to rotate the color (incrememnting by 1 will give you a shade higher, decrementing by 1 will give you a shade lower, colors will also rotate):

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

## Built with

- [Node.js](https://github.com/nodejs/node)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Parcel](https://github.com/parcel-bundler/parcel)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
