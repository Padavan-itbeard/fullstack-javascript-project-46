import { program } from 'commander';

function gendiff() {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0');

  program
    .helpOption('-V, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information');

  program.parse();
}

export default gendiff;