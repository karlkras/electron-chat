import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss"

const targetElem = document.getElementById("chatApp");
const root = createRoot(targetElem);

root.render(<App/>);
