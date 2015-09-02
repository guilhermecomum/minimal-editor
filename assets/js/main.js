(function(document){

  function setStyle(style, param) {
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
      document.execCommand(style, false, param);
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

  function addImage(e) {
    e.stopPropagation();
    e.preventDefault();
    x = e.clientX;
    y = e.clientY;

    var file = e.dataTransfer.files[0],
        reader = new FileReader();

    reader.onload = function (event) {
      var dataURI = event.target.result;
      var img = document.createElement("img");
      img.src = dataURI;
      if (document.caretPositionFromPoint) {
        var pos = document.caretPositionFromPoint(x, y);
        range = document.createRange();
        range.setStart(pos.offsetNode, pos.offset);
        range.collapse();
        range.insertNode(img);
      }else if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(x, y);
        range.insertNode(img);
      }
    };

    reader.readAsDataURL(file);
  }

  var pad = document.getElementById('pad');
  pad.addEventListener('drop', addImage, false);

})(document);
