//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle


//import your own components
import PruebaCarrusel from "./component/PruebaCarrusel/PruebaCarrusel.jsx";

//render your react application
ReactDOM.render(<PruebaCarrusel />, document.querySelector("#app"));
