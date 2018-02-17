const title = React.createElement("h1", null, "Hello Dojo!");
const message = React.createElement("h3", null, "Things I Need To Do:");
const items = ["Learn React", "Practice self-care", "Be dope af"];
const list = React.createElement("ul", null, items.map((item, index) => 
    React.createElement("li", {key: index}, `${item}`)
));
const app = React.createElement("div", null, title, message, list);

ReactDOM.render(app, document.getElementById("app"));
