var clicked = false;
    
    function playLottie()
    {
       if(clicked)
       {
         searchIcon.play(); searchIcon.setDirection(-1);
         searchText.style.opacity = "100";
         searchText.style.translate = "00px";
         searchIcon.style.translate = "00px";
         var elements = document.getElementsByClassName('searchbutton-container1');
         for (var i in elements) {
         if (elements.hasOwnProperty(i)) {
         elements[i].className = 'searchbutton-container';
        }
        }
         clicked = false;
       }
      else
      {
        searchIcon.play(); searchIcon.setDirection(1);
        searchText.style.opacity = "0";
        searchText.style.translate = "-10px";
        searchIcon.style.translate = "25px";
        var elements = document.getElementsByClassName('searchbutton-container');
        for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
        elements[i].className = 'searchbutton-container1';
        }
        }
        clicked = true;
      }
    }