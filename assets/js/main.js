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

    var file = e.dataTransfer.files[0],
        reader = new FileReader();

    reader.onload = function (event) {
      var newImage = document.createElement('span');
      newImage.innerHTML = "<img src=" + event.target.result + " >";
      e.target.appendChild(newImage);
    };

    reader.readAsDataURL(file);
  }

  var pad = document.getElementById('pad');
  pad.addEventListener('drop', addImage, false);

})(document);
