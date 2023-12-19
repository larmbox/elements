import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const name = 'elements';
const entry = 'index';

export const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true,
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    dedupe: ['vue'],
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, `./src/${entry}.ts`),
      name,
      fileName: () => `${name}.mjs`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
    },
  },
});
