import { describe, expect, it } from 'vitest';
import { config } from '~/common/config';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  describe('when not provided a default theme name', () => {
    it('should use the global configuration', () => {
      const { theme } = useTheme(config);

      expect(theme.value).toBe(config.theme);
    });
  });

  describe('when provided a default theme name', () => {
    it('should set that theme as default', () => {
      const { theme } = useTheme({ ...config, theme: 'dark' });

      expect(theme.value).toBe('dark');
    });
  });

  describe('when registering a new theme', () => {
    it('should be available', () => {
      const { registerTheme, setTheme, theme } = useTheme({
        ...config,
        prefix: 'e',
      });

      registerTheme({
        name: 'dark',
        variables: {
          color: 'var(--primary-color)',
        },
      });
      setTheme('dark');

      expect(theme.value).toBe('dark');
    });
  });

  describe('provided a theme does not exist', () => {
    it('should not be available', () => {
      const { setTheme } = useTheme(config);

      expect(() => {
        setTheme('dark');
      }).toThrow();
    });
  });
});
