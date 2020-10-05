import { isComponent } from "./parse";

export const generate = (root, reference) => {
  let children = root.children;
  let create = "";
  let update = "";
  let remove = "";

  for (let i = 0; i < children.length; i++) {
    let generated = generateAll(children[i], root, root, reference);
    create += generated[0];
    update += generated[1];
    remove += generated[2];
  }

  let prelude = `let ${getElement(root.current)}`;
  for (let i = root.current + 1; i <= root.next; i++) {
    prelude += `, ${getElement(i)}`;
  }
  return `function fragment(ctx){
    ${prelude};
    return [
      (root)=>{${setElement(root.current, "root;")}${create}},
      ()=>{${update}},
      ()=>{${remove}}
    ];
  }`;
};

const generateAll = (element, parent, root) => {
  switch (element.type) {
    case "text": {
      let attribute = element.attributes[0];
      let textElement = root.next++;
      let textCode = setTextContent(textElement, attributeValue(attribute));

      let updateCode = "";
      let createCode = setElement(textElement, createTextNode("''"));

      if (attribute.dynamic) {
        updateCode += textCode;
      } else {
        createCode += textCode;
      }

      return [
        createCode + generateMount(parent.current,textElement),
        updateCode,
        removeChild(parent.current, textElement),
      ];
    }
    default: {
      let attributes = element.attributes;
      let children = element.children;

      if (isComponent(element.type)) {
      } else {
        element.current = root.next++;
      }

      let createCode = "";
      let updateCode = "";
      for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        let attributeCode = void 0;

        if (attribute[0] === "o" && attribute[1] === "n") {
          // event toto
        } else {
          attributeCode = setAttribute(element.next, attribute);
        }

        if (attribute.dynamic) {
          updateCode += attributeCode;
        } else {
          createCode += attributeCode;
        }
      }

      for (let j = 0; j < children.length; j++) {
        let generated = generateAll(children[j], element, root, null);
        createCode += generated[0];
        updateCode += generated[1];
      }

      console.log(parent,element)

      return [
        createCode + generateMount(parent.current,element.current),
        updateCode,
        removeChild(parent.current, element.current),
      ];
    }
  }
};

const getElement = (element) => `el${element}`;
const setElement = (element, code) => `${getElement(element)}=${code}`;
const createTextNode = (content) => `document.createTextNode(${content});`;
const createElement = (type) => `document.createElement(${type});`;
const removeChild = (parent, element) =>
  `${getElement(parent)}.removeChild(${getElement(element)});`;
const appendChild = (parent, element) =>
  `${getElement(parent)}.appendChild(${getElement(element)});`;
const addEventListener = (element, type, callbak) =>
  `${getElement(element)}.addEventListener(${type},${callbak});`;
const setTextContent = (element, content) =>
  `${getElement(element)}.nodeValue=${content};`;
const setAttribute = (element, attribute) =>
  `${getElement(element)}.setAttribute(${attribute.name},${attributeValue(
    attribute
  )});`;

const attributeValue = (attribute) =>
  attribute.expression ? attribute.value : '"' + attribute.value + '"';

const generateMount = (parent, element) => appendChild(parent, element);
