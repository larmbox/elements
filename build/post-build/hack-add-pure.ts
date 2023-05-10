import fs from 'fs';
import path from 'path';

/**
 * @see https://github.com/vuejs/vue-next/issues/2860
 */

const file = path.resolve(__dirname, '..', '..', 'dist', 'elements.es.js');

fs.readFile(file, 'utf8', (error, data) => {
  if (error) {
    return console.log(error);
  }

  const result = data.replace(
    /defineComponent\({/g,
    '/* @__PURE__ */ defineComponent({'
  );

  fs.writeFile(file, result, 'utf8', (error) => {
    if (error) return console.log(error);
  });
});
