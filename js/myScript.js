var divs = ["chara1", "chara2", "chara3", "chara4", "chara5", "chara6"];
    var visibleDivClass = null;
    function divVisibility(divClass) {
      if(visibleDivClass === divClass) {
        visibleDivClass = null;
      } else {
        visibleDivClass = divClass;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divClass, div;
      for(i = 0; i < divs.length; i++) {
        divClass = divs[i];
        div = document.getElementByClass(divClass);
        if(visibleDivClass === divClass) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }