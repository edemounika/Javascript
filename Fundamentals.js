import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>js object =>Html element(rendering)

const heading = React.createElement(
    "h1",
    { id: "heading", xyz : "abc" },
    "Hello World From React fundamental");

    console.log(heading)
// jsx syntax
//jsx => babile is transpiling to React.createElement=>ReactElement-js object =>Html element(rendering)
    const jsxheading = (<h1 id= "heading"> using jsx</h1>)
    console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(jsxheading);


