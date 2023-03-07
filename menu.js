const {app, Menu} = require("electron")

const setMainMenu = () =>{
    const template = [
        {
            label:app.getName,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
              ]
        }
    ]

    
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
}

module.exports = {
    setMainMenu 
}