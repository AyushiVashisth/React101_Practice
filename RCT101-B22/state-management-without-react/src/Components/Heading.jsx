function Heading(properties) {
  const { text, level } = properties;
  const heading = document.createElement(`h${level}`);
  heading.textContent = text;
  return heading;
}

export default Heading;
