import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    component into component
  </h1>
);

const HeadingComponents = () => (
  <React.Fragment>
    <div id="container">
      <h2> {100 + 200}</h2>
      <Title />
      <Title></Title>
      {/* // call like js function also */}
      {Title()}
      <h1 className="heading">React Functional Component </h1>
    </div>
  </React.Fragment>
);

//or
//   const HeadingComponents= () => (
//     <>
//     <div id="container">
//      <h2> {number}</h2>
//      <h2> {100+200}</h2>
//       <Title/>
//       {title}
//       <h1 className="heading">React Functional Component </h1>
//     </div>
//     </>
//   );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponents />);
