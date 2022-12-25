import "./index.css";

const app = document.getElementById("app");

function Button(properties) {
  const {text, disabled, onClick} = properties;
  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = disabled;
  button.onclick = onClick;
  return button;
}

function Header(properties) {
  const {text, level} = properties;
  const header = document.createElement(`h${level}`);
  header.textContent=text;
  return header;
}

const header = Header({text: "Counter 0", level: 1});
const addBtn = Button({
  text: "Add",
  disabled: false,
  onClick: () => alert("clicked add")
});

const reduceBtn = Button({
  text: "Reduce",
  disabled: false,
  onClick: () => alert("clicked reduce")
});

app.append(header, addBtn, reduceBtn);