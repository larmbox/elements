import { expect, test } from 'vitest';
import { EThemeProvider } from '~/index';

test('mount component', async () => {
  expect(EThemeProvider).toBeTruthy();
});
