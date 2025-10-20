import { describe, expect, it } from 'vitest';

import { stringToTailwindColor } from '../src/main';

describe('stringToTailwindColor', () => {
  // biome-ignore lint/suspicious/noTemplateCurlyInString: example
  it('should return a string in the format of `${Color}-${Shade}`', () => {
    const result = stringToTailwindColor('test');
    expect(result).toMatch(/^[a-z]+-\d+$/);
  });

  it('should return a color based on the input string', () => {
    const result = stringToTailwindColor('test');
    expect(result).toBe('gray-800');
  });

  it('should handle custom colors and shades', () => {
    const result = stringToTailwindColor('test', {
      colors: ['red', 'green'],
      shades: [100, 200],
    });
    expect(result).toMatch(/^(red|green)-(100|200)$/);
  });

  it('should handle an empty string', () => {
    const result = stringToTailwindColor('');
    expect(result).toBe('red-50');
  });

  it('should handle a string with special characters', () => {
    const result = stringToTailwindColor('!@#$%^&*()');
    expect(result).toBe('zinc-900');
  });

  it('should handle a string with spaces', () => {
    const result = stringToTailwindColor('hello world');
    expect(result).toBe('purple-500');
  });

  it('should apply the hash offset correctly', () => {
    const hashOffset1 = stringToTailwindColor('test', { hashOffset: 1 });
    expect(hashOffset1).toBe('gray-900');

    const hashOffset2 = stringToTailwindColor('test', { hashOffset: 2 });
    expect(hashOffset2).toBe('gray-950');

    const hashOffset3 = stringToTailwindColor('test', { hashOffset: 3 });
    expect(hashOffset3).toBe('zinc-50');
  });
});
