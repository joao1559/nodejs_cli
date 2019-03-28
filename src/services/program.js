const fs = require('fs');
let programs = {};
const appData = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : process.env.HOME + "/.local/share");
const exec = require('child_process').exec;

module.exports = {
    add,
    start,
    remove
}

async function add(cmd) {
    if(await fs.existsSync(`${appData}\\teste_cli_data.json`))
        programs = JSON.parse((await fs.readFileSync(`${appData}\\teste_cli_data.json`)).toString());
    else
        programs.data = [];

    programs.data.push({name: cmd.name, path: cmd.path})
    await fs.writeFileSync(`${appData}\\teste_cli_data.json`, JSON.stringify(programs))

    console.log('Sucesso!');
}

async function start(name) {
    if(await fs.existsSync(`${appData}\\teste_cli_data.json`))
        programs = JSON.parse((await fs.readFileSync(`${appData}\\teste_cli_data.json`)).toString());
    else
        console.log('Nenhum programa foi registrado no CLI');

    let path;

    for(let i = 0; i < programs.data.length; i++) {
        let item = programs.data[i];

        if(item.name == name) {
            path = item.path;
            break;
        }
    }

    path = path.split('\\');
    let nameExec = path.pop();
    path = path.join('\\');

    exec(`cd ${path} && start ${nameExec}`);
}

async function remove() {
    if(await fs.existsSync(`${appData}\\teste_cli_data.json`)) 
        await fs.unlinkSync(`${appData}\\teste_cli_data.json`)
    
    console.log('Cache limpo!');
}