import chalk from 'chalk';
import fse from 'fs-extra';

console.log(chalk.greenBright.bold('✔️  Larmbox Elements built!'));

fse.mkdirpSync('dist/theme');
fse.copySync('src/theme', 'dist/theme');

fse.copySync('src/components', 'dist/components', {
  filter: (name) => {
    if (name.includes('__snapshots__')) return false;
    // Always copy directories.
    if (fse.lstatSync(name).isDirectory()) {
      return true;
    }
    // Copy all files ending with '.scss'.
    return /.*(.scss)$/.test(name);
  },
});
