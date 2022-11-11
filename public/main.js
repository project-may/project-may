const { queryHelpers } = require("@testing-library/react");
const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        width: 1280,
        height: 720,
        backgroundColor: "#282c34",
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.removeMenu();
    win.loadURL("http://localhost:3000");

    // win.webContents.openDevTools();
}

const test = '';
hhhh;

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
