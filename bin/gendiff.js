#!/usr/bin/env node
import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .helpOption('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number');

program.parse(process.argv);