$( "button" ).click(function() {
  var test = $("option:selected").val();
  var toTranslate = $("input").val();
  alert(toTranslate);
  alert(test);
  var res = toTranslate.split(" ");
  if (test ==="German") {
    Gibberish.translateToGerman(res);

    //call translation function//
  }          //german is selected, pull list a
    else {
      Gibberish.translateToItalian(res);//call translation function for Italian//
    }         //pull list b
});



