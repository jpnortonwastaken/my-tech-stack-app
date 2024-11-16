import { app, BrowserWindow } from "electron";
import path from "path";
import { isDef } from "./util.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  if (isDef()) {
    mainWindow.loadURL("http://localhost:5123"); // For development
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html")); // For production
  }
});
