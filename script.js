"use strict";
import {getData} from "./modules/fetching.js";

window.addEventListener("DOMContentLoaded", start);

function start(){
   setInterval(getData, 60000) 
}