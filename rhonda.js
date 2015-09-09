var Gibberish = (function(lingo) {

  var  Italian = {
    merry: "allegro",
    christmas: "natale",
    and: "e",
    happy: "felice",
    new: "nuovo",
    year: "anno"
  } 

  
  lingo.translateToItalian = function(input) {
    var outputText = "";
    for(var i=0; i<input.length; i++) {
      outputText += Italian[input[i]] + " ";
    }
    console.log(outputText);
    return outputText;
  }   

  return lingo
  
//IIFE = This whole thing is an IIFE! Immediately Invoked Function Expression ()//
})(Gibberish);