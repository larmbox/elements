import { describe, expect, it } from 'vitest';
import { configuration } from '~/components/EButton/EButton';
import { EButton } from '..';
import { useComponent } from './useComponent';
import { useVariant } from './useVariant';

describe('useTheme', () => {
  describe('when not provided a default theme name', () => {
    it('should use the global configuration', () => {
      const component = useComponent<EButton>(configuration, {});
      expect(useVariant(component)).toStrictEqual({});
    });
  });
});
