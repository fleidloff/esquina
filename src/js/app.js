window.addEventListener("resize", checkPortraitOrLandscape, true);
document.addEventListener("DOMContentLoaded", checkPortraitOrLandscape, true);

function checkPortraitOrLandscape() {
	console.log("check portrait");
	if (isPortrait()) {
    	document.body.className = "portrait";
	} else {
   		document.body.className = "landscape";
	}	
}

function isPortrait() {
	return window.innerHeight > window.innerWidth;	
}
