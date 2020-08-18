#!/usr/bin/env node

const path = require('path')
const program = require('commander')
const chalk = require('chalk')

const systemCommand = require('./commands/system')

// eslint-disable-next-line import/no-dynamic-require
const pkg = require(path.join(__dirname, '../package.json'))

program
  .version(pkg.version)
  .description(`${chalk.blue('System & Hardware Info CLI Tool')}`)

program
  .command('system')
  .alias('a')
  .description('Displays information system NoFluffJobs project')
  .action(() => systemCommand())

program.parse(process.argv)
