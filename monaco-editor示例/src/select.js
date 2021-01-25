import editor from './editor'

const [ model ] = editor.getModels();
const typeSelect = document.getElementById("type");
const themeSelect = document.getElementById("theme");

typeSelect.addEventListener("change", (e) => {
  const { value } = e.target;
  editor.setModelLanguage(model, value);
  setNewValue(model, value);
});

themeSelect.addEventListener("change", (e) => {
  const { value } = e.target;
  editor.setTheme(value);
});

function setNewValue(textModel, type) {
  let str = ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n");
  switch (type) {
    case "json":
      str = ["{", '\t"name": "test"', "}"].join("\n");
      break;
    case "css":
      str = [".container {", "\theight: 60px;", "}"].join("\n");
      break;
    case "html":
      str = "<div></div>";
      break;
    case "typescript":
      str = ["export class Test {", "}"].join("\n");
      break;
    case "sql":
      str = "select * from user;";
      break;
  }
  textModel.setValue(str);
}