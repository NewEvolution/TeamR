var Gibberish = function() {
  var lexiconGerm = {
    merry: "fröhlich",
    christmas: "Weihnachten",
    and: "und",
    happy: "glücklich",
    new: "neu",
    year: "Jahr"
  }
  return {
    translateToGerman: function(sentText) {
      var outputText = "";
      for(var i=0; i<sentText.length; i++) {
        outputText += lexiconGerm[sentText[i]] + " ";
      }
      console.log(outputText);
      return outputText;
    }
  };
}();