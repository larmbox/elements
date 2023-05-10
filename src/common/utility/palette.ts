function normalizeColor(originalColor: string): string {
  const color = originalColor.replace(/^#/, '');
  if (color.length === 3) {
    return color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  return color;
}

function decimalToHex(decimal: number): string {
  return decimal.toString(16);
}

function hexToDecimal(hex: string): number {
  return parseInt(hex, 16);
}

function mix(baseColor: string, color: string, weight = 1): string {
  if (weight > 1 || weight < 0) {
    throw new Error('Weight must be between 0 and 1.');
  }

  const result = [];

  baseColor = normalizeColor(baseColor);
  color = normalizeColor(color);

  const characters = color.length - 1;

  for (let i = 0; i <= characters; i += 2) {
    const bColorDecimal = hexToDecimal(baseColor.slice(i, i + 2));
    const colorDecimal = hexToDecimal(color.slice(i, i + 2));

    const value = decimalToHex(
      Math.round(
        colorDecimal + (bColorDecimal - colorDecimal) * ((weight * 100) / 100)
      )
    ).padStart(2, '0');

    result.push(value);
  }
  return `#${result.join('')}`;
}

function lighten(color: string, weight: number) {
  return mix('#fff', color, weight);
}

function darken(color: string, weight: number) {
  return mix('#000', color, weight);
}

/**
 * Creates a new palette from a single color.
 *
 * @param name Name of the variant.
 * @param color 6-character HEX code, starting with '#'.
 */
export function createPalette(name: string, color: string) {
  if (!/^#[0-9A-F]{6}$/i.test(color)) {
    throw new Error(
      `createPalette only accepts valid 6-character HEX codes. Received '${color}'.`
    );
  }
  const coeff = (1 - 1 / 7) / 7;
  return {
    [name]: color,
    [`${name}-1`]: lighten(color, coeff * 7),
    [`${name}-2`]: lighten(color, coeff * 6),
    [`${name}-3`]: lighten(color, coeff * 5),
    [`${name}-4`]: lighten(color, coeff * 4),
    [`${name}-5`]: lighten(color, coeff * 3),
    [`${name}-6`]: lighten(color, coeff * 2),
    [`${name}-7`]: lighten(color, coeff),
    [`${name}-8`]: color,
    [`${name}-9`]: darken(color, coeff),
    [`${name}-10`]: darken(color, coeff * 2),
    [`${name}-11`]: darken(color, coeff * 3),
    [`${name}-12`]: darken(color, coeff * 4),
    [`${name}-13`]: darken(color, coeff * 5),
    [`${name}-14`]: darken(color, coeff * 6),
    [`${name}-15`]: darken(color, coeff * 7),
    [`${name}-T10`]: color + decimalToHex(128 - 25 * 4),
    [`${name}-T20`]: color + decimalToHex(128 - 25 * 3),
    [`${name}-T30`]: color + decimalToHex(128 - 25 * 2),
    [`${name}-T40`]: color + decimalToHex(128 - 25),
    [`${name}-T50`]: color + decimalToHex(128 - 1),
    [`${name}-T60`]: color + decimalToHex(128 + 25),
    [`${name}-T70`]: color + decimalToHex(128 + 25 * 2),
    [`${name}-T80`]: color + decimalToHex(128 + 25 * 3),
    [`${name}-T90`]: color + decimalToHex(128 + 25 * 4),
  };
}
