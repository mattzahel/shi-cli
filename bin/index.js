#!/usr/bin/env node

const path = require('path')
const program = require('commander')
const chalk = require('chalk')

const { system } = require('./commands/system')

// eslint-disable-next-line import/no-dynamic-require
const pkg = require(path.join(__dirname, '../package.json'))

program
  .version(pkg.version)
  .description(`${chalk.blue('System & Hardware Info CLI Tool')}`)

program
  .command('system')
  .alias('sys')
  .description('Displays information about operating system')
  .action(() => system())

program
  .command('filesystem')
  .alias('fs')
  .description('Displays information about filesystem')
  .action(() => system())

program
  .command('user')
  .alias('usr')
  .description('Displays information about current user')
  .action(() => system())

program.parse(process.argv)
