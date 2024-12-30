import React from "react"
import ReactDom from "react-dom/client"
import App from "./Components/App"
import "./index.css"


const root=ReactDom.createRoot(document.querySelector(".container"))

root.render(<App/>)