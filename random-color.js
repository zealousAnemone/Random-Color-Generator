$(document).ready(function() {
  
  var redVal = 0;
  var greenVal = 0;
  var blueVal = 0;
  var color = "";
  
  //Handles RGB to hex color conversion
  $("#convert").click(function() {
    
    //Set red, green, blue values to value typed in text input
    redVal = $("#red").val();
    greenVal = $("#green").val();
    blueVal = $("#blue").val();
    color = 'rgb(' + redVal + ', ' + greenVal + ', ' + blueVal + ')';
    //Set background color to chosen color
    $("body").css("background-color", color);
    //Fill in hex code of color using getHex function
    $("#hex-spot").html("  #" + getHex(redVal, greenVal, blueVal));
  });
  
  //Handles random color button, sets random value for RGB values
  $("#color-picker").click(function() {
    redVal = Math.floor(Math.random()*255);
    greenVal = Math.floor(Math.random()*255);
    blueVal = Math.floor(Math.random()*255);
    color = 'rgb(' + redVal + ', ' + greenVal + ', ' + blueVal + ')';
    $("body").css("background-color", color);
    //Puts RGB values of randomly generated color in the form text spots
    $("#red").val(redVal);
    $("#green").val(greenVal);
    $("#blue").val(blueVal);
    $("#hex-spot").html("  #" + getHex(redVal, greenVal, blueVal));
  });
  function getHex(red, green, blue) {
  //This function converts RGB value to hex code
  //Get red part of hex value
  var redOne = Math.floor(red/16);
  var redTwo = red%16;
  if (redOne >= 10) {
    redOne = hexify(redOne);
  }
  if (redTwo >= 10) {
    redTwo = hexify(redTwo);
  }
  var redHex = redOne+redTwo.toString();
  
  //Get green part of hex value
  var greenOne = Math.floor(green/16);
  var greenTwo = green%16;
  if (greenOne >= 10) {
    greenOne = hexify(greenOne);
  }
  if (greenTwo >= 10) {
    greenTwo = hexify(greenTwo);
  }
  var greenHex = greenOne+greenTwo.toString();
  
  //Get blue part of hex value
  var blueOne = Math.floor(blue/16);
  var blueTwo = blue%16;
  if (blueOne >= 10) {
    blueOne = hexify(blueOne);
  }
  if (blueTwo >= 10) {
    blueTwo = hexify(blueTwo);
  }
  var blueHex = blueOne+blueTwo.toString();
  
  return redHex + greenHex + blueHex;
}
  
function hexify(color) {
  //This function returns A-F values for use in hex code
  switch (color) {
    case 10:
      return "A";
    case 11:
      return 'B';
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
  }
}
});

