//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter/SecondsCounter.jsx";

let count = 0;

//timer, pause, reset, countdown, alarm
// const [ clockAction, setclockAction ] = useState("Counting");
// const [ count, setCount ] = useState(0);

setInterval(function(){
    const fourth = Math.floor(count/1000)%10;
    const third = Math.floor(count/100)%10;
    const second = Math.floor(count/10)%10;
    const first = count%10;
    count++;
    //setCount(count+1);

    ReactDOM.render(<SecondsCounter first={first} second={second} third={third} fourth={fourth}/>, document.querySelector("#app"));

},1000);

