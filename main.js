HTMLElement.prototype.setAttributes = function(attrObj={}) {
  Object.keys(attrObj).forEach(attrName => {
    this.setAttribute(attrName, attrObj[attrName]);
  });
}

HTMLElement.prototype.appendChildren = function(children=[]) {
  children.forEach(child => {
    const node = typeof child === 'string'
      ? document.createTextNode(child)
      : child;

      this.appendChild(node);
  });
}

const doSomething = () => console.log('did something');

function createEl(elName, attributes = {}, children = []) {
  const elem = document.createElement(elName);
  elem.setAttributes(attributes);
  elem.appendChildren(
    Array.isArray(children)
    ? children
    : [children.toString()]
  );
  
  return elem;
}

function generateHtml() {
  const anchor = createEl('button', {
    class: 'red highlighted',
    href: 'https://www.google.com',
    onclick: 'doSomething()'
  }, 'here');

  const para = createEl('p', {}, ['For going to google click ', anchor])
  const content = document.getElementById('content');

  content.appendChild(para);
}