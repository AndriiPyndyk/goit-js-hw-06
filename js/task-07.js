const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const currentFontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = currentFontSize;
});
