function Button(properties) {
  const { text, disabled, onClick } = properties;
  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = disabled;
  button.onclick = onClick;
  return button;
}

export default Button;
