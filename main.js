const { app, BrowserWindow } = require('electron');
const url  =  require('url');
const path = require('path');

let win;
function createWindow () {
win = new BrowserWindow({ width: 800, height: 600, frame: false});

// and load the index.html of the app.
// win.loadFile(`./dist/wdr/index.html`);
// win.loadURL(`file://${__dirname}./angular_build/index.html`);
win.loadURL(url.format({
    pathname: path.join(__dirname, './angular_build/index.html'),
    protocol:'file:',
    slashes: true

}));
// win.loadFile(path.resolve(__dirname, './angular_build/index.html'));

// Open the DevTools.
// win.webContents.openDevTools();

// Emitted when the window is closed.
win.on('closed', () => {
   win = null
  })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', createWindow);


// Quit when all windows are closed.
app.on('window-all-closed', () => {

// On macOS it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q

if (process.platform !== 'darwin') {       app.quit()     }   });

app.on('activate', () => {

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.

if (win === null) {       createWindow()     }

});
