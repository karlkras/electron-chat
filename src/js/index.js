import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";

const targetElem = document.getElementById("electron-chat");
const root = createRoot(targetElem);

root.render(<App/>);
