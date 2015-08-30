function setStyle(style) {
  var range, sel;

  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt) {
      range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
    document.execCommand(style, false, null);
    document.designMode = "off";
  }
}
