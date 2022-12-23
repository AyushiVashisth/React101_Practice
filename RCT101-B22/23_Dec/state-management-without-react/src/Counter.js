import Heading from "./Components/Heading.jsx";
import Button from "./Components/Button.jsx";
import "./App.css";

const onUpdate = () => {
  renderDom();
};

function createCounter(initValue = 0) {
  let counter = initValue;

  function getState() {
    return counter;
  }

  function setState(newValue) {
    counter = newValue;
    // alert(`state updated`);
    onUpdate();
  }

  return [getState, setState];
}

const counterState1 = createCounter();
const counterState2 = createCounter();

function Counter(counterState) {
  const [getState, setState] = counterState;
  function render() {
    const header = Heading({ text: `Counter ${getState()}`, level: 1 });
    const addBtn = Button({
      text: "ADD",
      disabled: false,
      onClick: () => setState(getState() + 1)
    });
    const reduceBtn = Button({
      text: "REDUCE",
      disabled: false,
      onClick: () => setState(getState() - 1)
    });

    const div = document.createElement("div");
    div.append(header, addBtn, reduceBtn);
    return div;
  }
  return render();
}

function renderDom() {
  const app = document.getElementById("app");
  app.innerHTML = null;
  app.append(Counter(counterState1));
  app.append(Counter(counterState2));
}

export default renderDom;
