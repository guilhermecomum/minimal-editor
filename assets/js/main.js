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

Mousetrap.bind('mod+b', function(e) {
  e.preventDefault();
  setStyle("bold");
});

Mousetrap.bind('mod+i', function(e) {
  e.preventDefault();
  setStyle("italic");
});

Mousetrap.bind('mod+u', function(e) {
  e.preventDefault();
  setStyle("underline");
});
