#!/usr/bin/env node

const program = require('commander');
const youtubeDownload = require('./services/youtubeDownload')
const programs = require('./services/program')
 
program
  .command('download <link>')
  .option('-p, --path <path>', 'Caminho para salvar arquivo')
  .action(function (link, cmd) {
    youtubeDownload.download(link, cmd)
  })

program
  .command('add')
  .option('-n, --name <nome>', 'Adiciona um nome ao programa')
  .option('-p, --path <caminho>', 'Adiciona um caminho ao programa')
  .action(function (cmd) {
    programs.add(cmd)
  })

program
  .command('start <name>')
  .action(function (text) {
    programs.start(text)
  })

program
  .command('clear')
  .action(function () {
    programs.remove()
  })

program.parse(process.argv)