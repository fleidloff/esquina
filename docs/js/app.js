var header = document.getElementsByClassName("header")[0];
document.addEventListener("scroll", function(ev) {
  	if (document.body.scrollTop > window.innerHeight) {
    	document.body.className = "fix-header";  
	} else {
   		document.body.className = "";  
  	}
});
