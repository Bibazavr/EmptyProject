import React from "react";
import ReactDOM from "react-dom";
import FastClick from "fastclick";

import "core-js";

import EntryPoint from "./webui/EntryPoint";
import "./main.css"


const onDeviceReady = () => {
    FastClick.attach(document.body);
    if (window.cordova !== undefined) {
        setTimeout(() => navigator.splashscreen.hide(), 1000);
    }
    return ReactDOM.render(<EntryPoint className={"root"}/>, document.querySelector("#root"));
};

if (window.cordova !== undefined) {
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    onDeviceReady();
}






