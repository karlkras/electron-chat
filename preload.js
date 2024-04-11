const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld("e_notification", {
  sendNotification(message) {
    console.log("here we are");
    ipcRenderer.send('notify', message);
  }
})


