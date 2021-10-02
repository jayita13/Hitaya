const { app, BrowserWindow } = require('electron');
const path = require('path');

const express = require('express');
const server = express();

server.use('/', express.static(__dirname));

function createWindow() {
  // Create the browser window.
  const infos = server.listen(0, 'localhost', () => {
    const mainWindow = new BrowserWindow({
      width: 1500,
      height: 800
    });

    mainWindow.loadURL(`http://localhost:${infos.address().port}/dist/HitayaApp/index.html`);
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
});

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
