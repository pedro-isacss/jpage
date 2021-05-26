// === Copy text ===
function copyText(index) {
  const text = document.querySelectorAll(".code pre");
  const range = document.createRange();
  range.selectNodeContents(text[index]);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand("copy");
}
