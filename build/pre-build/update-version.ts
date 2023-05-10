import chalk from 'chalk';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

import { version } from '../../package.json';

console.log(chalk.whiteBright.bold(`Version -> ${version}`));

writeFileSync(
  resolve(__dirname, '..', '..', 'src', 'version.ts'),
  `export default '${version}';\n`
);
