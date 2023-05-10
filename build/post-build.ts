import chalk from 'chalk';

import './post-build/hack-add-pure';
import './post-build/scss';
import './post-build/web-types';

console.log(chalk.greenBright.bold('✔️  Larmbox Elements built!'));
