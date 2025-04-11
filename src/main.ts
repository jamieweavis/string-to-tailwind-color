import {
  type TailwindColor,
  type TailwindShade,
  defaultColors,
  defaultShades,
} from './tailwind';

interface StringToColorOptions<
  Color extends TailwindColor = TailwindColor,
  Shade extends TailwindShade = TailwindShade,
> {
  colors?: readonly Color[];
  shades?: readonly Shade[];
  hashOffset?: number;
}

export const stringToTailwindColor = <
  Color extends TailwindColor = TailwindColor,
  Shade extends TailwindShade = TailwindShade,
>(
  str: string,
  options: StringToColorOptions<Color, Shade> = {},
): `${Color}-${Shade}` => {
  const colors = (options.colors ?? defaultColors) as readonly Color[];
  const shades = (options.shades ?? defaultShades) as readonly Shade[];

  const colorPool: `${Color}-${Shade}`[] = [];
  for (const color of colors) {
    for (const shade of shades) {
      colorPool.push(`${color}-${shade}` as `${Color}-${Shade}`);
    }
  }

  const stringHash =
    Array.from(str).reduce((acc, char) => acc + char.charCodeAt(0), 0) +
    (options.hashOffset || 0);

  return colorPool[stringHash % colorPool.length];
};

const foo = stringToTailwindColor('foo', {
  colors: ['red', 'green', 'blue'],
  shades: [300, 500, 700],
});

console.log(foo); // 'red-300'
