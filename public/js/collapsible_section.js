applyListenerToAllElements("section-header-container-up", false);
applyListenerToAllElements("section-header-container-down", false);

function applyListenerToAllElements(element, active){
  var coll = document.getElementsByClassName(element);
  var i;
  if(active){
    coll[i].classList.toggle("active");
  }
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      manipulateContent(this, content);
    });
  } 
}

function manipulateContent(header, content){
  if (content.style.maxHeight){
    header.classList.toggle("active");
    content.style.maxHeight = null;
  } else {
    header.classList.remove("active");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
