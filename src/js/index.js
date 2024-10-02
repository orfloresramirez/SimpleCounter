//import react into the bundle
import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";


function SecondsCounter(props) {
 return(
    <div>

        <div className="container bg-dark">
            <div className="row">
                <div className="col-2">
                <div className="text-end"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="41" height="41" viewBox="0 0 24 24">
<path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
</svg></div>
                </div>
                <div className="col-2">
                    <h1 className="text-end text-light">{Math.trunc(props.digito1/1000%10)}</h1>
                </div>
                <div className="col-2">
                    <h1 className="text-end text-light">{Math.trunc(props.digito1/100%10)}</h1>
                </div>
                <div className="col-2">
                    <h1 className="text-end text-light">{Math.trunc(props.digito1/10%10)}</h1>
                </div>
                <div className="col-2">
                    <h1 className="text-end text-light">{props.digito1%10}</h1>
                </div>
            </div>
        </div>
    </div>
 )    
}


//render your react application


let counter = 0;
setInterval(function(){
    
    counter++;
    ReactDOM.createRoot(document.getElementById("app")).render(
        <SecondsCounter digito1={counter}/>
    )
},1000);



// ReactDOM.createRoot(document.getElementById("app")).render(
//     <SecondsCounter saludo="hola"/>








