#!/usr/bin/env node
const { log } = console;
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const savePassword = require('./lib/savepassword');
const generatePassword = require('./lib/generatepassword');

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-asc, --ascii', 'created password is ascii characters only')
  .parse();
console.log(program.opts());
const { length, save, isAscii } = program.opts();

// Get generated password
const generatedPassword = generatePassword(length, isAscii);

// Save to file
if (save) {
  savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));
