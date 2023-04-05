//using object {}, and print helloworld react
// object used for to give a attributes 
// const heading = React.createElement("h1",
//     { id: "heading", xyz : "abc" },
//     "Hello World From React");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent =
    React.createElement("div", { id: "parent" },[
        React.createElement("div", { id: "child" },

            [
                React.createElement("h1", {}, "Iam h1 tag"),
                React.createElement("h2", {}, "Iam h2 tag")
            ]),
            React.createElement("div", { id: "child2" },

            [
                React.createElement("h1", {}, "Iam h1 tag"),
                React.createElement("h2", {}, "Iam h2 tag")
            ])]
    );

console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);