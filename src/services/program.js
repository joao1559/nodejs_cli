const fs = require('fs')
const programs = {};
const appData = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : process.env.HOME + "/.local/share")

module.exports = {
    add
}

async function add(cmd) {
    let data = await fs.readFileSync(`${appData}\\teste_cli_data.json`)
    programs.data.push({name: cmd.name, path: cmd.path})
}