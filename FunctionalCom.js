import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = (
  <h1 className="head" tabIndex="5">
    normal react element
  </h1>
);



// Normal function 
// const TitleNormal  = function (){
//     retrun {
//     <h1 className="header" tabIndex="5">
//       Render component in component
//     </h1>
//     };
// };
  


// First React component or component composition
const Title = () => (
    <h1 className="head" tabIndex="5">
      Render component in component
    </h1>
  );
 

//React Functional component->jsx  also allow anyjavascript expression in any where using {}=> curly braces
const number = 1000;
//React Functional component

const HeadingComponents = () => (
  <div id="container">
   <h2> {number}</h2>
   <h2> {100+200}</h2>
    <Title/>
    {title}
    <h1 className="heading">React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// to render a Functional component like below then beabil will understood. 
root.render(<HeadingComponents />);
