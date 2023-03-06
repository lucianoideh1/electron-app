console.log("Hola desde electron");
const {app, BrowserWindow} = require("electron")

const createWindow = () => {
    const window = new BrowserWindow({
        width:800,
        height:800
    })

    window.loadFile("index.html")
}

app.whenReady().then(() =>{
    createWindow()
})