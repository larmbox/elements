import fse from 'fs-extra';

fse.mkdirp('dist/theme');
fse.copy('src/theme', 'dist/theme');

fse.copy('src/components', 'dist/components', {
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

fse.copy('src/common/components', 'dist/common/components', {
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
