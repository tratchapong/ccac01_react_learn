
export const makeElement =(tag, attr_n, attr_v, content) => {
  let output = document.createElement(tag)
  output.setAttribute(attr_n, attr_v)
  output.textContent = content
  return output
}

