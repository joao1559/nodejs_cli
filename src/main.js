#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
 
program
  .command('console <text>')
  .option('-r, --rainbow <color>', 'Cor do texto')
  .action(function (text, cmd) {
    if(cmd.rainbow) {
        console.log(colors[cmd.rainbow](text))
    } else {
        console.log(text)
    }
  })
 
program.parse(process.argv)