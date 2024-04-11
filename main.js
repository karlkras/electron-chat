const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;
const os = require('node:os')

//
// const reactDevToolsPath = path.join(
//   os.homedir(),
//   '\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\5.0.2_9'
// )
//
// app.whenReady().then(async () => {
//   await session.defaultSession.loadExtension(reactDevToolsPath)
// })



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.loadFile('index.html').then(() => {});
  isDev && win.webContents.openDevTools();
}

if(isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}
app.whenReady().then(createWindow);

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});
