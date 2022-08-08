var divs = ["card1", "card2", "card3", "card4", "card5", "card6"];
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