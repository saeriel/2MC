//////////SCROLL//////////
$(document).ready(function() {
	$("#about").click(function (){ 		$('body').scrollTo(document.getElementById('about-anchor'), 800)
						});
	$("#home").click(function (){ 		$('body').scrollTo('0px', 800)
						});
});

//////EYE TRACKER///////

var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy){
  // Initialise core variables
  var r = $(pupil).width()/2;
  var center = {
    x: $(eyecontainer).width()/2 - r, 
    y: $(eyecontainer).height()/ 3 - r
  };
  var distanceThreshold = 
	  $(eyecontainer).width()/3 - r;
  var mouseX = 0, mouseY = 0;
  
  // Listen for mouse movement
  $(window).mousemove(function(e){ 
    var d = {
      x: e.pageX - r - eyeposx - center.x,
      //.pageX/Y gets the coordinates of the mouse pointer
      y: e.pageY - r - eyeposy - center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < distanceThreshold) {
      mouseX = e.pageX - eyeposx - r;
      mouseY = e.pageY - eyeposy - r;
    } else {
      mouseX = d.x / distance * distanceThreshold + center.x;
      mouseY = d.y / distance * distanceThreshold + center.y;
    }
  });
  
  // Update pupil location
  var pupil = $(pupil);
  var xp = 0, yp = 0;
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    pupil.css({left:xp, top:yp});    
  }, 1);
};

var eye = new DrawEye("#eyebottom", "#pupilleft", 213, 10);


///////IMAGE BLINK THING//////////


function blinky_1() {
    $('#blinky_1').animate({
        'height': '+=100%'
    }, 600).delay(300).animate({
        'height': '-=100%'
    });
};

function blinky_2() {
    $('#blinky_2').animate({
        'height': '+=100%'
    }, 400).delay(300).animate({
        'height': '-=100%'
    });
};

function blinky_3() {
    $('#blinky_3').animate({
        'height': '+=100%'
    }, 500).delay(200).animate({
        'height': '-=100%'
    });
};

	////image array

//gallery 1

var images_1 = new Array
images_1[0] = "img/gallery_1_(0-of-6).jpg"
images_1[1] = "img/gallery_1_(1-of-6).jpg"
images_1[2] = "img/gallery_1_(2-of-6).jpg"
images_1[3] = "img/gallery_1_(3-of-6).jpg"
images_1[4] = "img/gallery_1_(4-of-6).jpg"
images_1[5] = "img/gallery_1_(5-of-6).jpg"
images_1[6] = "img/gallery_1_(6-of-6).jpg"
images_1[7] = "img/gallery_1_(7-of-6).jpg"
images_1[8] = "img/gallery_1_(8-of-6).jpg"

var currentimg_1 = 0

var lastimg_1 = images_1.length-1;

function nextSlide_1() {
	if (currentimg_1 == lastimg_1)
		    {
             	currentimg_1 = 0;  document.getElementById('slide-1').src = images_1[currentimg_1];
                }
                else
                {
                    currentimg_1++;
					document.getElementById('slide-1').src = images_1[currentimg_1];
				}
}


//gallery 2

var images_2 = new Array
images_2[0] = "img/gallery_3_(0).jpg"
images_2[1] = "img/gallery_3_(1).jpg"
images_2[2] = "img/gallery_3_(2).jpg"
images_2[3] = "img/gallery_3_(3).jpg"
images_2[4] = "img/gallery_3_(4).jpg"
images_2[5] = "img/gallery_3_(5).jpg"


var currentimg_2 = 0

var lastimg_2 = images_2.length-1;

function nextSlide_2() {
	if (currentimg_2 == lastimg_2)
		    {
             	currentimg_2 = 0;  document.getElementById('slide-2').src = images_2[currentimg_2];
				
                }
                else
                {
                    currentimg_2++;
					document.getElementById('slide-2').src = images_2[currentimg_2];
				}
}	


//gallery 3

var images_3 = new Array 

images_3[0] = "img/gallery_4_(0).jpg"
images_3[1] = "img/gallery_4_(1).jpg"
images_3[2] = "img/gallery_4_(2).jpg"
images_3[3] = "img/gallery_4_(3).jpg"
images_3[4] = "img/gallery_4_(4).jpg"

var currentimg_3 = 0

var lastimg_3 = images_3.length-1;

function nextSlide_3() {
	if (currentimg_3 == lastimg_3)
		    {
             	currentimg_3 = 0;  document.getElementById('slide-3').src = images_3[currentimg_3];
				
                }
                else
                {
                    currentimg_3++;
					document.getElementById('slide-3').src = images_3[currentimg_3];
				}
}	


///////MISC///////

function someFunc_1() {
	nextSlide_1();
	blinky_1();
}
function someFunc_2() {
	nextSlide_2();
	blinky_2();
}

function someFunc_3() {
	nextSlide_3();
	blinky_3();
}
