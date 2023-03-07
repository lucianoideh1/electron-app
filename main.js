console.log("Hola desde electron");
const { app, BrowserWindow } = require("electron")
const { setMainMenu } = require("./menu.js")

const createWindow = () => {
    const window = new BrowserWindow({
        width:800,
        height:800,
        minHeight:400,
        minWidth:400
    })

    window.loadFile("index.html")
    // window.loadURL("https://www.twitch.tv/ibai")
}

setMainMenu()

app.whenReady().then(() =>{
    createWindow()
})