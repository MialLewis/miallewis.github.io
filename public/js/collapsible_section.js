var coll = document.getElementsByClassName("section-header-container-up");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    manipulateContent(this, content);
  });
} 

coll = document.getElementsByClassName("section-header-container-down");
for (i = 0; i < coll.length; i++) {
  coll[i].classList.toggle("active");
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    manipulateContent(this, content);
  });
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