var Gibberish = function() {
  var lexiconGerm = { // Object containing word pairs,
    merry: "fröhlich", // with English as the keys and
    christmas: "Weihnachten", // German as the values
    and: "und",
    happy: "glücklich",
    new: "neu",
    year: "Jahr"
  }
  return { // This returns the public function available to the user
    translateToGerman: function(sentText) { // The public function, which takes the array of English words as its argument
      var outputText = ""; // Empty string that will be filled with the translated words
      for(var i=0; i<sentText.length; i++) { // Loop through all the elements (words) in the array of English words (sentText)
        outputText += lexiconGerm[sentText[i]] + " "; // For each word (i), in the array of Engish words (sentText), use it as the key for the word-pair object (lexiconGerm),      
      }                                               // and add the corresponding value (the German word), and a space, to the translation (outputText)
      console.log(outputText);
      return outputText;  // Spit the string of the translated text back out of the function
    }
  };
}();