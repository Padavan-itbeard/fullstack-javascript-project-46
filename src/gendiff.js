import { program } from 'commander';

function gendiff() {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0');

  program
    .helpOption('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>')
    .helpOption('-h, --help', 'output usage information');

  program.parse();
}

export default gendiff;