import {formatBeers} from "./formatbeers.js";
import {formatQueue} from "./formatqueue.js"
export function getData(){

  fetch("https://foo-bar-project.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => {
      formatBeers(data);
      formatQueue(data);
    })
}