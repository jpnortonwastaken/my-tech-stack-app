import { app, BrowserWindow } from "electron";
import path from "path";
import { isDef } from "./util.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    title: "My Counter App", // Set window title
    width: 500, // Min width
    height: 350, // Min height
    minWidth: 500, // Prevent window from getting smaller than this
    minHeight: 350,
    // frame: false, // Remove window frame/top bar
    // Alternative to frame: false, you can use:
    // titleBarStyle: "hidden", // macOS - hides title bar but keeps traffic lights
    titleBarStyle: "hiddenInset", // macOS - hides title bar with more inset
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDef()) {
    mainWindow.loadURL("http://localhost:5123"); // For development
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html")); // For production
  }
});
