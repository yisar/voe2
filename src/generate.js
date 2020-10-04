const { isCompletionStatement } = require("babel-types");

export const generate = (root) => {
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
  return `[()=>{${create}},()=>{${update}},()=>{${remove}}]`;
};

const generateAll = (element, parent, root, reference) => {
  switch (element.type) {
    case "text": {
      let attribute = element.attributes[0];
      let index = root.index++;
      let code = setTextContent(element, attributeValue(attribute));

      let updateCode = "";

      if (attribute.dynamic) {
        updateCode += code;
      }

      return ["", updateCode, removeChild(index, parent.element)];
    }
    default: {
      let attributes = element.attributes;
      let children = element.children;

      if (isComponent(element.type)) {
      } else {
        element.index = root.index++;
      }

      let createCode = "";
      let updateCode = "";
      for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        let attributeCode = void 0;

        if (attribute[0] === "o" && attribute[1] === "n") {
          // event toto
        } else {
          attributeCode = setAttribute(element.index, attribute);
        }

        if (attribute.dynamic) {
          updateCode += attributeCode;
        }
      }

      for (let j = 0; j < children.length; j++) {
        let generated = generateAll(children[i]);
        createCode += generated[0];
        updateCode += generated[1];
      }

      return [createCode, updateCode, removeChild(element.index, parent.index)];
    }
  }
};

const attributeValue = (attribute) => {
  return attribute.expression ? attribute.value : '"' + attribute.value + '"';
};
