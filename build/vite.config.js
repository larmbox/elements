import vue from '@vitejs/plugin-vue';
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
  plugins: [
    vue({
      // template: {
      //   ssr: true,
      //   // compilerOptions: {
      //   //   directiveTransforms: { 'open-modal': ssrTransformCustomDir },
      //   // },
      // },
    }),
  ],
  resolve: {
    dedupe: ['vue'],
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, '..', 'src'),
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, `../src/${entry}.ts`),
      name,
      fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
