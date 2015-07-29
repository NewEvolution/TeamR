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

return Gibberish
  

  
//IIFE = This whole thing is an IIFE! Immediatelt Invoked Function Expression ()//
})(Gibberish);


